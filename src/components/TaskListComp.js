import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
  }, []);

  const handleDelete = (id) => {
    const updatedTasks = tasks
      .filter((task) => task.id !== Number(id)) // Remove the selected task
      .map((task, index) => ({ ...task, id: index + 1 })); // Reset IDs sequentially

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center">Task List</h3>
      {tasks.length ? (
        <div className="row">
          {tasks.map(({ id, title, description, status }) => (
            <div className="col-md-4" key={id}>
              <div className="card mb-3 shadow-sm p-3">
                <h5>{title}</h5>
                <p>{description.length > 50 ? description.slice(0, 50) + "..." : description}</p>
                <span className={`badge ${status === "Pending" ? "bg-warning" : "bg-success"}`}>{status}</span>
                <div className="mt-3 d-flex gap-2">
                  <button className="btn btn-primary btn-sm" onClick={() => navigate(`/taskdetails/${id}`)}>
                    View
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
