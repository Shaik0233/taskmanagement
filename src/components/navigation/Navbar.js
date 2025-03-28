import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavigationBar = () => {
    return (
        <nav>
            <Link to="/">Add Task</Link>
            <Link to="/tasklist">Task List</Link>
        </nav>
    );
};

export default NavigationBar;
