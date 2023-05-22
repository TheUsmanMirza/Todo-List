import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[{"id":"2023-2-7","name":"Title 1","desc":"Jumping directly to Web3", "status":false},{"id":"2023-12-14","name":"Title 2","desc":"Coding Tech", "status":false},{"id":"2023-2-3","name":"Title 3","desc":"You don't need to memorize all the 30 terms", "status":false},{"id":"2023-5-23","name":"Title 4","desc":"Rust is an ideal smart contract language", "status":false}],
    reducers:{
        
        addTask: (state, action)=>{
            const newTask = {
                id: new Date(),
                name: action.payload.task,
                desc: action.payload.desc,
                status: action.payload.status
            }
            state.push(newTask);
        },
        deleteTask: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const {addTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;