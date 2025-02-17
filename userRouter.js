import { Router } from "express";
import userController from './userController.js';

const userRouter = new Router();

userRouter.post('/create', userController.create);
userRouter.get('/:id', userController.getUserOfId);
userRouter.put('/:id', userController.updateUserOfId);
userRouter.get('/email/:email', userController.getUserEmail);

export default userRouter;