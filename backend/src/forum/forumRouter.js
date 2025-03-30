import express from 'express';
import { getQuestions,createQuestion, createComment} from './forumController.js';
import authenticate from '../middlewares/auth.js';
const forumRouter = express.Router();

forumRouter.get('/', authenticate,getQuestions);
forumRouter.post('/', authenticate,createQuestion);
forumRouter.post('/comment/:id', authenticate,createComment);

export default forumRouter;