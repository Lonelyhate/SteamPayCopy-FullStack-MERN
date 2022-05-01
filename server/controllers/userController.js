const User = require('../models/User');
const Role = require('../models/Role');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const uuid = require('uuid');
const path = require('path');

const generateJwt = (id, email, role, avatar) => {
    return jwt.sign({ id, email, role, avatar }, process.env.SECRET_KEY, { expiresIn: '30m' });
};

class UserController {
    async registartion(req, res) {
        try {
            const errors = validationResult(req);
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: 'Неккоректные данные' });
            }

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors });
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
            const token = generateJwt(user._id, email, userRole);
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
            const token = generateJwt(user._id, email, user.role, user.avatar);
            return res.json({ token });
        } catch (e) {
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
            const token = generateJwt(req.user.id, req.user.email, req.user.role, req.user.avatar);

            return res.json({ token });
        } catch (e) {
            return res.status(400).json({ message: 'server error' });
        }
    }

    async uploadAvatar(req, res) {
        try {
            const { img } = req.files;
            const user = await User.findById(req.user.id);
            const avatarName = uuid.v4() + '.jpg';
            console.log(avatarName)
            img.mv(path.resolve(__dirname, '..', 'static', avatarName));
            user.avatar = avatarName
            await user.save()
            const token = generateJwt(user.id, user.email, user.role, user.avatar)
            return res.json({token})
        } catch (e) {
            return res.status(400).json({ message: 'Error upload avatar' });
        }
    }
}

module.exports = new UserController();
