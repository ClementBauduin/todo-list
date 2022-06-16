import { configureStore, createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: "todo",
    initialState: [
        {id:1,text:"Apprendre Next.js",done:false},
        {id:2,text:"Apprendre Typescript",done:false}
    ],
    reducers: {
        addTask: (state,action) => {
            const newTask = {
                id: Date.now(),
                done:false,
                text:action.payload
            }
            state.push(newTask)
        },

        toggleTask: (state,action) => {
            const task = state.find(t => t.id === action.payload);
            task.done = !task.done;
        },

        deleteTask: (state,action) => {
            state = state.filter(t => t.id !== action.payload);
            return state
        }
    }
})

export const {addTask,toggleTask,deleteTask} = todoSlice.actions

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
});