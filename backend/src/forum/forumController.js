import forumModel from '../models/forumModel.js'

import createHttpError from 'http-errors'

export const createQuestion = async (req, res) => {
    try {
        const { title, description } = req.body

        if (!title || !description) {
            return next(createHttpError(400, 'Title and description are required'))
        }

        const newQuestion = await forumModel.create({
            ...req.body,
            userId: req.userId,
        })

        res.status(201).json(newQuestion)
    }catch (error) {
        return createHttpError(500, 'Error while creating question')
    }
}


export const getQuestions = async (req, res) => {
    try {
        const questions = await forumModel.find().populate({ path: 'userId', select: 'name' })
        res.json(questions)
    } catch (error) {
        return createHttpError(500, 'Error while getting questions')
    }
}