import React, { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState({ title: "", description: "", status: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the task state
    setTask((prevTask) => {
      const updatedTask = { ...prevTask, [name]: value };

      // If the title has 3 or more characters, remove the error message
      if (name === "title" && value.length >= 3) {
        setError(""); // Clear the error if the title is valid
      }

      return updatedTask;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the title is valid and if a status is selected
    if (task.title.length < 3) {
      return setError("Title must be at least 3 characters");
    }
    if (!task.status) {
      return setError("Please select a valid status.");
    }

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTask = { id: tasks.length + 1, ...task };

    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));

    alert("Task added successfully!");
    setTask({ title: "", description: "", status: "" });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h4 className="text-center mb-3">Add New Task</h4>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter task title"
          name="title"
          value={task.title}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Enter task details"
          rows="4"
          name="description"
          value={task.description}
          onChange={handleChange}
        ></textarea>

        <select
          className="form-select mb-3"
          name="status"
          value={task.status}
          onChange={handleChange}
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        {error ? <div className="alert alert-danger">{error}</div> : null}

        <button type="submit" className="btn btn-success w-100">
          Save Task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
