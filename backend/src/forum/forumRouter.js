import express from 'express';
import { getQuestions,createQuestion, postComment} from './forumController.js';
import authenticate from '../middlewares/auth.js';
const forumRouter = express.Router();

forumRouter.get('/', authenticate,getQuestions);
forumRouter.post('/', authenticate,createQuestion);
forumRouter.post('/comment/:id', authenticate,postComment);

export default forumRouter;