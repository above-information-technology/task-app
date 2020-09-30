const mongoose = require('mongoose')
const { Schema, model } = mongoose


const taskSchema = new Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
        ref: 'User'
    }

}, {
    timestamps: true
})

const Task = model('Task', taskSchema)

module.exports = Task