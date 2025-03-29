import React, { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import TaskCard from "./TaskCard"; 
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(task => String(task.id) !== String(id));
    const reindexedTasks = updatedTasks.map((task, index) => ({
      ...task,
      id: index + 1,
    }));

    localStorage.setItem("tasks", JSON.stringify(reindexedTasks));
    setTasks(reindexedTasks);
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Task List</h3>
      {loading ? <Spinner /> : (
        <div className="row">
          {tasks.length ? tasks.map(task => (
            <TaskCard 
              key={task.id} 
              {...task} 
              onDelete={handleDelete} 
            />
          )) : <p className="text-center text-muted">No tasks available.</p>}
        </div>
      )}
    </div>
  );
};

export default TaskList;
