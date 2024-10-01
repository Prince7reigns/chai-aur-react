import { createContext,useContext } from "react";

export const TodoContext = createContext({
    Todos:[
        {
            id:1,
            Todo:"mes",
            Completed:false
        }
    ],
    addTodo: (Todo) =>{},
    updateTodo: (id ,Todo) =>{},
    deleteTodo:(id) =>{},
    toggleComplete:(id) =>{}
})

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext)
}