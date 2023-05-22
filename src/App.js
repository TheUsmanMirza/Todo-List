import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import logo from './to-do-list.png';

const App = () => {
	return (
		<div className="app">
		<img src={logo} alt="My Tasks" style={{width:"25%", height:"auto"}}/>
			<h1 className="app-title">ToDo List for Daily Tasks</h1>
			<AddTodo />
			<TodoList />
		</div>
	);
};

export default App;
