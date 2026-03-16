const db = require("../config/db");

const getAllTasks = async () => {
  const result = await db.query("SELECT * FROM task");
  return result.rows;
};

const createTask = async (title, status, project_id) => {
  const result = await db.query(
    "INSERT INTO task (title, status, project_id) VALUES ($1,$2,$3) RETURNING *",
    [title, status, project_id]
  );

  return result.rows[0];
};

module.exports = {
  getAllTasks,
  createTask
};