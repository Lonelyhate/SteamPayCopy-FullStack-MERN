const jwt = require('jsonwebtoken');

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
        }

        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'Пользователь не авторизован' });
            }
            console.log(token);
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (decoded.role != role) {
                return res.status(403).json({ message: 'У вас нет прав' });
            }

            req.user = decoded;
            next();
        } catch (e) {
            return res.status(400).json({ mssage: 'request error' });
        }
    };
};
