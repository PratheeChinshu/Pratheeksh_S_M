const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskTitle:{
        type: String,
        required: true
    },
    taskDescription:{
        type: Object,
        required: true 
    },
    due_date:{
        type: String,
        required: true 
    },
    priority:{
        type: String,
        required: true 
    },
    completionStatus:{
        type: String,
        required: true 
    },
    image:{
        type: String,
        required: true 
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('tasks', taskSchema)