import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormComp from "./FormComp"; 
const AddTask = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (id) {
      const foundTask = tasks.find((t) => t.id === Number(id));
      if (foundTask) setTask(foundTask);
    }
  }, [id]);

  const validateForm = () => {
    let newErrors = {};
    if (task.title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters long.";
    }
    if (!task.description.trim()) {
      newErrors.description = "Description cannot be empty.";
    } else if (task.description.trim().length > 50) {
      newErrors.description = "Description must be under 50 characters.";
    }
    if (!task.status) {
      newErrors.status = "Please select a status.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (id) {
      tasks = tasks.map((t) => (t.id === Number(id) ? { ...task, id: Number(id) } : t));
    } else {
      const newTask = { ...task, id: tasks.length + 1 };
      tasks.push(newTask);
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    navigate("/");
  };

  return <FormComp task={task} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} navigate={navigate} id={id} />;
};

export default AddTask;
