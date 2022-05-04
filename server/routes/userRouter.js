const Router = require('express');
const userController = require('../controllers/userController');
const router = new Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const checkRole = require('../middlewares/checkRoleMiddleware');

router.post(
    '/registration',
    [
        body('email', 'Некорректная почта').isEmail(),
        body('password', 'Пароль должен быть не менее 6 символов').isLength({ min: 6, max: 100 }),
    ],
    userController.registartion,
);
router.post('/login', userController.login);
router.post('/avatar', authMiddleware, userController.uploadAvatar);
router.get('/', checkRole('admin'), userController.getUsers);
router.get('/auth', authMiddleware, userController.auth);
router.delete('/avatar', authMiddleware, userController.deleteAvatar);
router.put(
    '/:change',
    [
        body('email', 'Некорректная почти').isEmail(),
        body('password', 'Пароль должен быть не менее 6 символов').isLength({ min: 6, max: 100 }),
        body('nickname', 'Никнейм должен быть не менее 3 символов').isLength({ min: 3, max: 25 }),
    ],
    authMiddleware,
    userController.userChange,
);

module.exports = router;
