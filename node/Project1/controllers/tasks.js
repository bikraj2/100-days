const Task = require("../models/task");
const asyncWrapper = require('../middleware/async_wrapper')

const getAllTasks = asyncWrapper( async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
 
});
const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task })})

const getTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: `no task with ID ${taskID}` });
    }
    res.status(200).json({ task: task });
})

const deleteTask = asyncWrapper(async (req, res) => {
 
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: `no task with ID ${taskID}` });
    }
    // res.status(200).json({msg:"task succesffuuly deleted"})
    res.status(200).json({ task: null, status: "success" });
})

const updateTask = asyncWrapper (async (req, res) => {
  
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      res.status(404).json({ msg: `no task with ID ${TaskID}` });
    }}
    )

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
};
