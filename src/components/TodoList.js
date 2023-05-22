import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

const TodoList = () => {
	var todos = useSelector((state)=>{
		return state.tasks;
	});

	var sortedTodos = [...todos].sort((a, b) => {
	// Compare dates in descending order (newest first)
	if (a.id > b.id) {
	  return -1;
	}
	if (a.id < b.id) {
	  return 1;
	}

	// If dates are the same, objects with status "true" go last
	if (a.status && !b.status) {
	  return 1;
	}
	if (!a.status && b.status) {
	  return -1;
	}
  
	return 0; // If all comparisons are equal
  });


	return (
		<ul className="tasks-list">
			{/* {todos.map((todo) => ( */}
			{sortedTodos.map((todo) => (
				
				<TodoItem id={todo.id} 
				title={todo.name}   desc={todo.desc} status={todo.status} />
			))}
		</ul>
	);
};

export default TodoList;
