import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import TaskDetailsCard from "./TaskDetailsCard"; 

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const foundTask = tasks.find((t) => t.id === Number(id));
      setTask(foundTask);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) return <Spinner />;

  if (!task) {
    return (
      <div className="container mt-4 text-center">
        <div className="alert alert-danger">
          Task not found.
          <button className="btn btn-secondary ms-3" onClick={() => navigate("/")}>
            Back to Tasks
          </button>
        </div>
      </div>
    );
  }

  return <TaskDetailsCard task={task} id={id} />;
};

export default TaskDetails;
