const Router = require('express')
const router = new Router()
const partnerController = require('../controllers/partnerController')
const authMiddleware = require('../middlewares/authMiddleware')
const checkRole = require('../middlewares/checkRoleMiddleware')

router.post('/partner', checkRole('admin'), partnerController.addPartner)
router.delete('/partner/:id', checkRole('admin'), partnerController.deletePartner)
router.get('/partner', authMiddleware, partnerController.getPartnerAll)

module.exports = router