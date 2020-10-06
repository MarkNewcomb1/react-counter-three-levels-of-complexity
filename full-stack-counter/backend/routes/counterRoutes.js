import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Counter from '../models/CounterModel.js'

// getting the counter
router.get('/', asyncHandler(async (req, res) => {
    const counterResults = await Counter.find({})
    res.json(counterResults)
}))

// router.put('/', (req, res) => {
//     res.json(counterData)
// })

export default router