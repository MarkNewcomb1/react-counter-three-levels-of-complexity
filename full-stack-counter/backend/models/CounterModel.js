import mongoose from 'mongoose'

const countSchema = mongoose.Schema({
    counter: Number
})

const Counter = mongoose.model('Counter', countSchema)

export default Counter