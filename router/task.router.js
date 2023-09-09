const express = require('express');
const multer = require('multer');
const taskModel = require('../models/tasks.model'); // Import the recipeModel
const { addTask, getAllTask, getTask, deleteTask } = require('../controller/task.controller');

const storage = multer.diskStorage({
  destination: (res, file, cb) => (
    cb(null, './taskImageImage')
  ),
  filename: (res, file, cb) => (
    cb(null, Date.now() + '-' + file.originalname)
  )
})

const upload = multer({ storage })

const router = express.Router()

router.get('/search', async (req, res) => {
  try {
    const query = req.query.query;

    // Perform a database search for tasks that match the query
    const searchResults = await taskModel.find({
      taskName: { $regex: query, $options: 'i' }, // Case-insensitive search
    });

    if (searchResults.length === 0) {
      // If no matching tasks are found, return a 404 status
      return res.status(404).json({ message: 'No matching tasks found.' });
    }

    // If matching tasks are found, return them in the response
    res.status(200).json(searchResults);
  } catch (error) {
    console.error('Error searching for tasks:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/add', upload.single('task-image'), addTask);
router.get('/all-tasks', getAllTask);
router.get('/task-details/:id', getTask);
router.delete('/delete-task/:id', deleteTask);

module.exports = router;