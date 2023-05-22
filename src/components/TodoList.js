import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  var todos = useSelector((state) => {
    return state.tasks;
  });

  var sortedTodos = [...todos].sort((a, b) => {
    if (a.status === true && b.status === false) {
      return 1; // Move "done" status objects to the end
    } else if (a.status === false && b.status === true) {
      return -1; // Move "new" status objects to the top
    } else {
      return new Date(b.id) - new Date(a.id); // Sort by date in descending order
    }
  });

  return (
    <ul className="tasks-list">
      {sortedTodos.map((todo) => (
        <TodoItem
          id={todo.id}
          title={todo.name}
          desc={todo.desc}
          status={todo.status}
        />
      ))}
    </ul>
  );
};

export default TodoList;
