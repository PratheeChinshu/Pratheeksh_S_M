import React, { useState } from 'react';
import './TaskList.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskTitle: 'Task 1',
      taskDescription: 'Description for Task 1',
      due_date: 'Due date for Task 1',
      priority:'Priority for Task 1',
      completion_status:'Completion status for Task 1',
    },
    {
      id: 2,
      taskTitle: 'Task 2',
      taskDescription: 'Description for Task 2',
      due_date: 'Due date for Task 2',
      priority:'Priority for Task 2',
      completion_status:'Completion status for Task 2',
    },
    {
      id: 3,
      taskTitle: 'Task 3',
      taskDescription: 'Description for Task 3',
      due_date: 'Due date for Task 3',
      priority:'Priority for Task 3',
      completion_status:'Completion status for Task 3',
    },
    // Add more task objects as needed
  ]);

  const [newTask, setNewTask] = useState({
    id: null,
    taskTitle: '',
    taskDescription: '',
    due_date: '',
    priority: '',
    completion_status: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setNewTask(taskToEdit);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleInsertOrUpdate = () => {
    if (isEditing) {
      // Update existing task
      const updatedTasks = tasks.map((task) =>
        task.id === newTask.id ? newTask : task
      );
      setTasks(updatedTasks);
      setIsEditing(false);
    } else {
      // Insert new task
      const newId = Math.max(...tasks.map((task) => task.id), 0) + 1;
      setTasks([...tasks, { id: newId, ...newTask }]);
    }

    // Reset the form fields
    setNewTask({
      id: null,
      taskTitle: '',
      taskDescription: '',
      due_date: '',
      priority: '',
      completion_status:'',
    });
  };

  return (
    <div className="container">
      <h1 className="my-4" style={{color:'lightblue'}}>Task Manager</h1>
      <h2 className="my-4" style={{color:'violet'}}>{isEditing ? 'Edit Task' : 'Add a New Task'}</h2>
      <form>
        <input
          type="hidden"
          id="taskId"
          value={newTask.id || ''}
          onChange={() => {}}
        />
        <div className="mb-3">
          <label htmlFor="newTitle" className="form-label" style={{color:'yellow'}}>
            Task Title
          </label>
          <input
            type="text"
            className="form-control"
            id="newTaskTitle"
            value={newTask.taskTitle}
            onChange={(e) =>
              setNewTask({ ...newTask, taskTitle: e.target.value })
            }
          />
        </div>
        <div className="mb-3" style={{color:'yellow'}}>
          <label htmlFor="newDescription" className="form-label" style={{color:'yellow'}}>
            Task Description
          </label>
          <input
            type="text"
            className="form-control"
            id="newTaskDescription"
            value={newTask.taskDescription}
            onChange={(e) =>
              setNewTask({ ...newTask, taskDescription: e.target.value })
            }
          />
        </div>
        <div className="mb-3 brown-text">
          <label htmlFor="newDuedate" className="form-label" style={{color:'yellow'}}>
            Due Date
          </label>
          <input
            type="text"
            className="form-control"
            id="newDuedate"
            value={newTask.due_date}
            onChange={(e) =>
              setNewTask({ ...newTask, due_date: e.target.value })
            }
          />
        </div>
        <div className="mb-3 brown-text">
          <label htmlFor="newTitle" className="form-label" style={{color:'yellow'}}>
            Priority
          </label>
          <input
            type="text"
            className="form-control"
            id="newPriority"
            value={newTask.priority}
            onChange={(e) =>
              setNewTask({ ...newTask, priority: e.target.value })
            }
          />
        </div>
        <div className="mb-3 brown-text">
          <label htmlFor="newCompletion_status" className="form-label" style={{color:'yellow'}}>
            Completion status
          </label>
          <input
            type="text"
            className="form-control"
            id="newCompletion_status"
            value={newTask.completion_status}
            onChange={(e) =>
              setNewTask({ ...newTask, completion_status: e.target.value })
            }
          />
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleInsertOrUpdate}
        >
          {isEditing ? 'Update Task' : 'Add Task'}
        </button>
      </form>

      {/* Display tasks in a table */}
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Completion status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.taskTitle}</td>
              <td>{task.taskDescription}</td>
              <td>{task.due_date}</td>
              <td>{task.priority}</td>
              <td>{task.completion_status}</td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleEdit(task.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskManager;


// import React, { useState } from 'react';
// import './TaskList.css';
// const TaskList = () => {
//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       title: 'Task 1',
//       description: 'Description for Task 1',
//       duedate: 'Due date for Task 1',
//       priority:'Priority for Task 1',
//       completion_status:'Completion status for Task 1',
//     },
//     {
//       id: 2,
//       title: 'Task 2',
//       description: 'Description for Task 2',
//       duedate: 'Due date for Task 2',
//       priority:'Priority for Task 2',
//       completion_status:'Completion status for Task 2',
//     },
//     {
//       id: 3,
//       title: 'Task 3',
//       description: 'Description for Task 3',
//       duedate: 'Due date for Task 3',
//       priority:'Priority for Task 3',
//       completion_status:'Completion status for Task 3',
//     },
//     // Add more book objects as needed
//   ]);

//   const [newTask, setNewTask] = useState({
//     id: null,
//      title: '',
//      description: '',
//      duedate: '',
//      priority: '',
//      completion_status: '',
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   const handleEdit = (id) => {
//     const taskToEdit = tasks.find((book) => task.id === id);
//     setNewTask(taskToEdit);
//     setIsEditing(true);
//   };

//   const handleDelete = (id) => {
//     const updatedTasks = tasks.filter((book) => task.id !== id);
//     setTasks(updatedTasks);
//   };

//   const handleInsertOrUpdate = () => {
//     if (isEditing) {
//       // Update existing book
//       const updatedTasks = tasks.map((book) =>
//         task.id === newTask.id ? newTask : task
//       );
//       setTasks(updatedTasks);
//       setIsEditing(false);
//     } else {
//       // Insert new book
//       const newId = Math.max(...tasks.map((task) => task.id), 0) + 1;
//       setTasks([...tasks, { id: newId, ...newTask }]);
//     }

//     // Reset the form fields
//     setNewTask({
//       id: null,
//       title: '',
//       description: '',
//       duedate: '',
//       priority: '',
//       completion_status:'',
//     });
//   };

//   return (
//     <div className="container">
//       <h1 className="my-4">Task List</h1>
//       <div className="row">
//         {tasks.map((task) => (
//           <div key={task.id} className="col-md-4 mb-4">
//             <div className="card">
//               <img
//                 src={book.coverImageUrl}
//                 className="card-img-top"
//                 alt={book.title}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{book.title}</h5>
//                 <p className="card-text">{book.author}</p>
//                 <div className="btn-group" role="group">
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => handleEdit(book.id)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => handleDelete(book.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <h2 className="my-4">{isEditing ? 'Edit Book' : 'Add a New Book'}</h2>
//       <form>
//         <input
//           type="hidden"
//           id="bookId"
//           value={newBook.id || ''}
//           onChange={() => {}}
//         />
//         <div className="mb-3">
//           <label htmlFor="newTitle" className="form-label">
//             Title
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="newTitle"
//             value={newBook.title}
//             onChange={(e) =>
//               setNewBook({ ...newBook, title: e.target.value })
//             }
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="newAuthor" className="form-label">
//             Author
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="newAuthor"
//             value={newBook.author}
//             onChange={(e) =>
//               setNewBook({ ...newBook, author: e.target.value })
//             }
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="newCoverImage" className="form-label">
//             Cover Image URL
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="newCoverImage"
//             value={newBook.coverImageUrl}
//             onChange={(e) =>
//               setNewBook({ ...newBook, coverImageUrl: e.target.value })
//             }
//           />
//         </div>
//         <button
//           type="button"
//           className="btn btn-success"
//           onClick={handleInsertOrUpdate}
//         >
//           {isEditing ? 'Update Book' : 'Add Book'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookList;