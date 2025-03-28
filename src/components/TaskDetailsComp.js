import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(null);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTask(tasks.find((t) => t.id === Number(id)) || null);
  }, [id]);

  const handleChange = (e) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.map((t) => (t.id === Number(id) ? task : t)))
    );
    setIsEditing(false);
    alert("Task updated successfully!");
  };

  if (!task) {
    return (
      <div className="container mt-4 text-center">
        <div className="alert alert-danger">
          Task not found.
          <button className="btn btn-secondary ms-3" onClick={() => navigate("/TaskList")}>
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center">{isEditing ? "Edit Task" : "Task Details"}</h2>

      {isEditing ? (
        <div className="mt-4 mx-auto" style={{ maxWidth: "500px" }}>
          {[{ name: "title", type: "text" }, { name: "description", type: "textarea" }, { name: "status", type: "select" }].map(({ name, type }) => (
            <div key={name} className="mb-3">
              <label className="form-label">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
              {type === "textarea" ? (
                <textarea className="form-control" name={name} value={task[name]} onChange={handleChange} rows="3" />
              ) : type === "select" ? (
                <select className="form-select" name={name} value={task[name]} onChange={handleChange}>
                  {[{ value: "Pending", label: "Pending" }, { value: "Completed", label: "Completed" }].map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              ) : (
                <input type="text" className="form-control" name={name} value={task[name]} onChange={handleChange} />
              )}
            </div>
          ))}
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-success" onClick={handleSave}>Save</button>
            <button className="btn btn-secondary ms-2" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="mt-4 mx-auto" style={{ maxWidth: "500px" }}>
          <p><strong>Title:</strong> {task.title}</p>
          <p><strong>Description:</strong> {task.description}</p>
          <p><strong>Status:</strong> <span className={`badge ${task.status === "Pending" ? "bg-warning" : "bg-success"}`}>{task.status}</span></p>

          <div className="mt-4 d-flex justify-content-center">
            <button className="btn btn-primary me-2" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn btn-secondary" onClick={() => navigate("/TaskList")}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
