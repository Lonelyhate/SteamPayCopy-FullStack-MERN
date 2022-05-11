const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const partnerRouter = require('./partnerRouter')
const garantRouter = require('./garantRouter')

router.use('/user', userRouter);
router.use('/profile', partnerRouter)
router.use('/garant', garantRouter)

module.exports = router;
