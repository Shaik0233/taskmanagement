import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigation/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from './components/TaskFormComp';
import TaskList from './components/TaskListComp';
import TaskDetails from './components/TaskDetailsComp';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<AddTask />} />
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/taskdetails/:id" element={<TaskDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
