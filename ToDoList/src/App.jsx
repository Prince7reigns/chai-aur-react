import { useState , useEffect} from 'react'
import './App.css'
import { TodoContextProvider } from './Context'
import TodoFrom from './Components/TodoFrom'
import ItemsTodo from './Components/ItemsTodo'

function App() {
  const [Todos, setTodos] = useState([])

  const addTodo = (Todo) =>{
    setTodos((prev) => [{id:Date.now(),...Todo} ,...prev])
  }

  const deleteTodo = (id) =>{
    setTodos( (prev) => prev.filter( (todo)=>todo.id!==id ))
  }

  const updateTodo = (id,Todo) =>{
    setTodos( (prev) => prev.map( (prevTodo) => prevTodo.id===id ? Todo: prevTodo) )
  }

  const toggleComplete = (id) =>{
   setTodos( (prev) => prev.map( (prevTodo) => prevTodo.id===id ? !prevTodo.Completed: prevTodo ))
  }

  useEffect(() => {
   const todos = JSON.parse(localStorage.getItem("todos"))
   if(todos){
    setTodos(todos)
   }
  }, [])

  useEffect(() => {
   localStorage.setItem("todos" , JSON.stringify(Todos))
  }, [Todos])
  
  

  return (
  <TodoContextProvider value={{Todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
  <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoFrom/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {Todos.map((Todo) => (
                          <div key={Todo.id}
                          className='w-full'
                          >
                            <ItemsTodo Todo={Todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
  </TodoContextProvider>
  )
}

export default App
