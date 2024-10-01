import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world" ,toggle:false}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload,
                toggle:false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },

        updateTodo:(state,action)=>{
           state.todos.map((prev) => {
            if(prev.id===action.payload[0]){
                prev.text=action.payload[1]
            }
           })
        },

        toggleTodo:(state,action)=>{
            state.todos.map((prev) =>{
              if(prev.id===action.payload){
              
                prev.toggle== !prev.toggle
               
              }
            })
               
        }
    }
})

export const {addTodo, removeTodo,toggleTodo} = todoSlice.actions

export default todoSlice.reducer