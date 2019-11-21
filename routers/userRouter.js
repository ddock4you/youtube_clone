import express from 'express';
import routes from '../routes';
import {
  users,
  userDetail,
  changePassword,
  getEditProfile,
  postEditFile
} from '../controller/userController';
import { onlyPrivate, uploadAvatar } from '../middlewares';

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditFile);
userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);

export default userRouter;
