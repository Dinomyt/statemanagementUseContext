import { useContext, useReducer, useState } from "react"
import todoReducer from "../reducers/TodoReducer";
import TodoContext from "../contexts/todoContext";
import LoginContext from "../contexts/loginContext";

interface Todo {
    id: number;
    value:number;
}

const Todo = () => {
    // const [todos, setTodos] = useState<Todo[]>([]);
    const todoContext = useContext(TodoContext);
    const loginContext = useContext(LoginContext);
    const generateRandomNumber = ():number => {
        return Math.floor(Math.random() * 1000)
    }

    // Add new todo
  const addTodo = () => {
   todoContext.Dispatch({type:'ADD', todo: {id:generateRandomNumber(), title:'todo' + generateRandomNumber(),}})
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    todoContext.Dispatch({type:"DELETE",todoId: id})
  };

  return (
  <>
  
    <div className="container mt-5">
      <h1 className="mb-4">Todo List</h1>
      {loginContext.user? <p>Hello {loginContext.user}</p> : <p></p>}
      <button className="btn btn-primary mb-3" onClick={addTodo}>
        Add Todo
      </button>
      <ul className="list-group">
        {todoContext.todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            {todo.title}
            <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  </>
  )
}
export default Todo
