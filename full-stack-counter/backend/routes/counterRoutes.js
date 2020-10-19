import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Counter from '../models/CounterModel.js'

// example counter result:
// [
//     {
//         "_id": "5f7cc277431d551d6e4fdb64",
//         "counter": 9,
//         "__v": 0
//     }
// ]

// getting the counter
router.get('/', asyncHandler(async (req, res) => {
    const counterResults = await Counter.find({})
    res.json(counterResults[0].counter)
}))

router.put('/increment', asyncHandler(async (req, res) => {
    const conditions = { '_id': '5f7cc277431d551d6e4fdb64' },
    update = { $inc: {counter: 1} };
    const updateAction = await Counter.update(conditions, update);
    const counterResults = await Counter.find({})
    res.json(counterResults[0].counter)
}))

router.put('/decrement', asyncHandler(async (req, res) => {
    const conditions = { '_id': '5f7cc277431d551d6e4fdb64' },
    update = { $inc: {counter: -1} };
    const updateAction = await Counter.update(conditions, update);
    const counterResults = await Counter.find({})
    res.json(counterResults[0].counter)
}))

router.put('/reset', asyncHandler(async (req, res) => {
    const conditions = { '_id': '5f7cc277431d551d6e4fdb64' },
    update = { $set: {counter: 0} };
    const updateAction = await Counter.update(conditions, update);
    const counterResults = await Counter.find({})
    res.json(counterResults[0].counter)
}))

export default router