import React from "react";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ id, title, description, status, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="col-md-4">
      <div className="card mb-3 shadow-sm p-3">
        <h5>{title}</h5>
        <p>{description.length > 50 ? description.slice(0, 50) + "..." : description}</p>
        <span className={`badge ${status === "Pending" ? "bg-warning" : "bg-success"}`}>{status}</span>
        <div className="mt-3 d-flex gap-2">
          <button className="btn btn-primary btn-sm" onClick={() => navigate(`/taskdetails/${id}`)}>View</button>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
