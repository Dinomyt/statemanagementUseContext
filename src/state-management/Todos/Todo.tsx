
import { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import TodoContext from "./todoContext";

const useTodos = () => useContext(TodoContext);


const Todo = () => {
  const todoContext = useTodos();
  const {user} = useAuth();

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
      {user? <p>Hello {user}</p> : <p></p>}
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
