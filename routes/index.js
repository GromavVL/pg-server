const { Router } = require('express');
const userRouter = require('./userRouter')
const phoneRouter = require('./phoneRouter')

const router = express.Router;

router.use('/users', userRouter)
router.use('/phones', phoneRouter)
