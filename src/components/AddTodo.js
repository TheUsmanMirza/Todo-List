import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (title.trim().length === 0) {
      alert("Enter a task title before adding !!");
      setTitle("");
      return;
    }

    dispatch(
      addTask({
        task: title,
        desc: desc,
        status: status,
      })
    );

    setTitle("");
    setDesc("");
    setStatus(false);
  };

  return (
    <>
      <div className="add-todo" style={{ display: "flex" }}>
        <input
          type="text"
          className="task-input"
          placeholder="Add Task"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <input
          type="text"
          className="desc-input"
          placeholder="Task Description"
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        ></input>

        <div className="checkbox-wrapper-11">
          <input
            id="status"
            type="checkbox"
            checked={status}
            onChange={() => setStatus(!status)}
          />
          <label htmlFor="status">Task Status</label>
        </div>
      </div>
      <button className="task-button" onClick={onSubmit}>
        Save
      </button>
    </>
  );
};

export default AddTodo;
