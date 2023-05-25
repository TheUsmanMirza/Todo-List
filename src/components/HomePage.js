import React from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import logo from './assets/images/to-do-list.png';

const HomePage = () => {
  return (
    <>
	<img src={logo} alt="My Tasks" style={{width:"25%", height:"auto"}}/>
			<h1 className="app-title">ToDo List for Daily Tasks</h1>
			<AddTodo />
			<TodoList />




    </>
  )
}

export default HomePage