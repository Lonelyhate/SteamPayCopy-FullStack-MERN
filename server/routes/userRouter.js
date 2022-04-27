const Router = require('express');
const userController = require('../controllers/userController');
const router = new Router();
const { check } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const checkRole = require('../middlewares/checkRoleMiddleware');

router.post(
    '/registration',
    [
        check('email', 'Неккоректная почта').isEmail(),
        check('email', 'Email не может быть пустым').notEmpty(),
        check('password', 'Пароль должен быть не менее 3 символов').isLength({ min: 3, max: 100 }),
    ],
    userController.registartion,
    console.log(33)
);
router.post('/login', userController.login);
router.get('/', checkRole('admin'), userController.getUsers);
router.get('/auth', authMiddleware, userController.auth);

module.exports = router;