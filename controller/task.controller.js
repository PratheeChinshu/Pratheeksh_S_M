const taskModel = require('../models/tasks.model')

const addTask = (req, res) => {
    const {taskTitle, taskDescription, due_date, priority,completionStatus} = req.body
    const imagePath = `${req.file.path}`
    taskModel.create({
        taskTitle,
        taskDescription,
        due_date,
        priority,
        completionStatus,
        image: imagePath,
    })
    res.send({status: true})
}

const getAllTask = (req, res) => {
    taskModel.find()
    .then((result) => {
        res.send(result)
    })
}

const getTask = (req, res) => {
    taskModel.findOne({_id: req.params.id})
    .then((result) => {
        res.send({task: result})
    })
}

const deleteTask = async (req, res) => {
    await taskModel.findOneAndDelete({_id: req.params.id})
    res.send('deleted')
}
module.exports = {addTask, getAllTask, getTask,deleteTask}