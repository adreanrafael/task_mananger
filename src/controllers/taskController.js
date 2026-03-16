const taskModel = require("../models/taskModel");

const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, status, project_id } = req.body;

    const newTask = await taskModel.createTask(
      title,
      status,
      project_id
    );

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar tarefa" });
  }
};

module.exports = {
  getTasks,
  createTask
};