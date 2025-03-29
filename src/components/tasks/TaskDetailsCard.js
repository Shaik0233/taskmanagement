import React from "react";
import { useNavigate } from "react-router-dom";

const TaskDetailsCard = ({ task, id }) => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Task Details</h2>
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
        <p><strong>Title:</strong> {task.title}</p>
        <p><strong>Description:</strong> {task.description}</p>
        <p><strong>Status:</strong> <span className={`badge ${task.status === "Pending" ? "bg-warning" : "bg-success"}`}>{task.status}</span></p>
        
        <div className="mt-4 d-flex justify-content-center">
          <button className="btn btn-primary me-2" onClick={() => navigate(`/addtask/${id}`)}>
            Edit
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsCard;
