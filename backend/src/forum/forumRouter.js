import express from 'express';
import { getQuestions,createQuestion } from './forumController.js';
import authenticate from '../middlewares/auth.js';
const forumRouter = express.Router();

forumRouter.get('/', authenticate,getQuestions);
forumRouter.post('/', authenticate,createQuestion);

export default forumRouter;