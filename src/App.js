import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigation/Navbar";
import TaskListPage from "./pages/TaskListPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import AddTaskPage from "./pages/AddTaskPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/taskdetails/:id" element={<TaskDetailsPage />} />
        <Route path="/addtask" element={<AddTaskPage />} />
        <Route path="/addtask/:id" element={<AddTaskPage />} />
      </Routes>
    </Router>
  );
};

export default App;
