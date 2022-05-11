const User = require('../models/User');
const Role = require('../models/Role');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');

const generateJwt = (id, email, role, avatar, nickname) => {
    return jwt.sign({ id, email, role, avatar, nickname }, process.env.SECRET_KEY, {
        expiresIn: '30m',
    });
};

class UserController {
    async registartion(req, res) {
        try {
            const errors = validationResult(req);
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: 'Некорректные данные' });
            }

            if (!errors.isEmpty()) {
                console.log(errors.array()[0])
                return res.status(400).json({message: errors.array()[0].msg});
            }

            const candidate = await User.findOne({ email });

            if (candidate) {
                return res
                    .status(400)
                    .json({ message: 'Пользователь с таким email уже существует' });
            }

            const hashPassword = bcrypt.hashSync(password, 5);
            const userRole = await Role.findOne({ value: 'user' });
            const user = new User({ email, password: hashPassword, role: userRole.value });
            await user.save();
            const token = generateJwt(user._id, email, userRole.value);
            return res.json({ token });
        } catch (e) {
            return res.status(400).json({ message: 'Requset error' });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: 'Пользователь с таким email не найден' });
            }

            const passwordValid = bcrypt.compareSync(password, user.password);
            if (!passwordValid) {
                return res.status(400).json({ message: 'Неправильно введен пароль' });
            }
            const token = generateJwt(user._id, email, user.role, user.avatar, user.nickname);
            return res.json({ token });
        } catch (e) {
            console.log(e);
            return res.status(400).json({ message: 'Request error' });
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find();
            return res.json(users);
        } catch (e) {
            return res.status(400).json({ message: 'request error' });
        }
    }

    async auth(req, res) {
        try {
            const token = generateJwt(
                req.user.id,
                req.user.email,
                req.user.role,
                req.user.avatar,
                req.user.nickname,
            );

            return res.json({ token });
        } catch (e) {
            return res.status(500).json({ message: 'server error' });
        }
    }

    async uploadAvatar(req, res) {
        try {
            const { img } = req.files;
            const user = await User.findById(req.user.id);
            const avatarName = uuid.v4() + '.jpg';
            console.log(avatarName);
            img.mv(path.resolve(__dirname, '..', 'static', avatarName));
            user.avatar = avatarName;
            await user.save();
            const token = generateJwt(user.id, user.email, user.role, user.avatar, user.nickname);
            return res.json({ token });
        } catch (e) {
            return res.status(400).json({ message: 'Error upload avatar' });
        }
    }

    async deleteAvatar(req, res) {
        try {
            const user = await User.findById(req.user.id);
            fs.unlinkSync(path.resolve(__dirname, '..', 'static', user.avatar));
            user.avatar = null;
            await user.save();
            const token = generateJwt(user.id, user.email, user.role, user.avatar, user.nickname);
            return res.json({ token });
        } catch (e) {
            return res.status(400).json({ message: 'Error delete avatar' });
        }
    }

    async userChange(req, res) {
        try {
            const { email, password, newPassword, nickname } = req.body;
            const user = await User.findById(req.user.id);
            const change = req.params.change;
            let token;
            const errors = validationResult(req).mapped()
            switch (change) {
                case 'email':
                    if(errors.email) {
                        return res.status(400).json({message: errors.email.msg})
                    }
                    if (email === user.email) {
                        return res.status(400).json({ message: 'Email не изменен' });
                    }
                    user.email = email;
                    await user.save();
                    token = generateJwt(
                        user._id,
                        user.email,
                        user.role,
                        user.avatar,
                        user.nickname,
                    );
                    return res.json({ token });
                case 'password':
                    if(errors.password) {
                        return res.status(400).json({message: errors.password.msg})
                    }
                    const newPasswordHash = bcrypt.hashSync(newPassword, 5);
                    const validPassword = bcrypt.compareSync(password, user.password);
                    if (!validPassword) {
                        return res.status(400).json({ message: 'Пароль неправильный' });
                    }
                    user.password = newPasswordHash;
                    await user.save();
                    token = generateJwt(user.id, user.email, user.role, user.avatar, user.nickname);
                    return res.json({ token });
                case 'nickname':
                    if(errors.nickname) {
                        return res.status(400).json({message: errors.nickname.msg})
                    }
                    if (nickname === user.nickname) {
                        return res.status(400).json({ message: 'Никнейм не изменен' });
                    }
                    user.nickname = nickname;
                    await user.save();
                    token = generateJwt(user.id, user.email, user.role, user.avatar, user.nickname);
                    return res.json({ token });
            }
        } catch (e) {
            return res.status(400).json({ message: 'Не получилось изменить' });
        }
    }
}

module.exports = new UserController();
