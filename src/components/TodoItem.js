import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/tasksSlice";

const TodoItem = ({ id, title, desc, status }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  const updateStatus = () => {
    dispatch(
      updateTask({
        id: id,
      })
    );
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const timeString = `${hours}:${minutes}`;
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    const time = (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
    return `${day}-${month}-${year} at ${time}`;
  }

  return (
    <li
      className="task-item"
      style={{
        backgroundColor: "#CACFD2",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "left" }}>
        {status ? (
          <h1
            style={{
              textDecoration: "line-through",
              textDecorationColor: "green",
              "text-decoration-thickness": "3px",
            }}
          >
            {title}
          </h1>
        ) : (
          <h1>{title}</h1>
        )}
        <p style={{ color: "#072d54" }}>{desc}</p>
        {status ? (
          <p style={{ color: "green" }}>Completed</p>
        ) : (
          <p style={{ color: "blue" }}>Pending</p>
        )}
        
        <b>{"Date: "+formatDate(id)}</b>
      </div>
      <div style={{ display: "" }}>
        <div>
          <button
            className="remove-task-button"
            onClick={() => {
              removeTask();
            }}
          >
            Delete
          </button>
        </div>
        <div>
        <br/>
          {status ? (
            ""
          ) : (
           
            <button
              className="update-task-button-new"
              onClick={() => {
                updateStatus();
              }}
            >
              Mark as Done
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
