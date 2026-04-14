const { Router } = require('express')

const userRouter = Router;

userRouter.post('/users', (req, res) => {});
userRouter.get('/users', (req, res) => {});
userRouter.get('/users/:id', (req, res) => {});
userRouter.patch('/users/:id', (req, res) => {});
userRouter.delete('/users/:id', (req, res) => {});


module.exports = userRouter;
