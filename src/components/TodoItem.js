import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";

const TodoItem = ({ id, title, desc, status }) => {

	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTask({
				
				id: id
			})
		)
	}

	function formatDate(dateString) {
		console.log(dateString);
		const date = new Date(dateString);
	  
		const day = String(date.getDate()).padStart(2, "0");
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const year = String(date.getFullYear()).slice(-2);
		const hours = String(date.getHours()).padStart(2, "0");
		const minutes = String(date.getMinutes()).padStart(2, "0");
	  
		return `${day}-${month}-${year} at ${hours}:${minutes}`;
	  }
	  
	 

	return (
		<li className="task-item" style={{backgroundColor:"#CACFD2", display:"flex", alignItems:"center"}}>
			<div style={{textAlign:"left"}}>

				<h1>{title} </h1>
				
				<p style={{color:"brown"}}>{desc}</p>
				
				{status ? <p style={{color:"green"}}>Completed</p> : <p style={{color:"red"}}>Pending</p>}
				
				<b>{"Date: "+formatDate(id)}</b>
				
				
			</div>
			<div>
				<button className="remove-task-button" onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
