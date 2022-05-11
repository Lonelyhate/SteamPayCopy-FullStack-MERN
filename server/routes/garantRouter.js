const Router = require('express');
const router = new Router();
const garantController = require('../controllers/garantController');
const checkRole = require('../middlewares/checkRoleMiddleware');

router.post('/', checkRole('admin'), garantController.addGarant);
router.get('/', garantController.getGarantAll);
router.delete('/:id', checkRole('admin'), garantController.deleteGarant);

module.exports = router;
