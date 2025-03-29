import React from "react";

const FormComp = ({ task, errors, handleChange, handleSubmit, navigate, id }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">{id ? "Edit Task" : "Add Task"}</h2>
      <form onSubmit={handleSubmit} className="mt-4 mx-auto" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" className="form-control" value={task.title} onChange={handleChange} required />
          {errors.title && <small className="text-danger">{errors.title}</small>}
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" value={task.description} onChange={handleChange}  />
          {errors.description && <small className="text-danger">{errors.description}</small>}
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select name="status" className="form-control" value={task.status} onChange={handleChange}>
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          {errors.status && <small className="text-danger">{errors.status}</small>}
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success">{id ? "Update" : "Add"} Task</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default FormComp;
