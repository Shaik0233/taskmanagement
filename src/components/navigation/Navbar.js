import React from 'react';
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container d-flex justify-content-center">
                <Link className="navbar-brand btn btn-primary text-white" to="/">Task List</Link>
                <Link className="navbar-brand  btn btn-primary text-white" to="/addtask">Add Task</Link>
            </div>
        </nav>
    );
};

export default NavigationBar;