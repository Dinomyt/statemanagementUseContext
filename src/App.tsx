import { useReducer } from "react"
import HomePage from "./components/HomePage"
import MyNavbar from "./components/MyNavbar"
import todoReducer from "./reducers/TodoReducer"
import TodoContext from "./contexts/todoContext"
import authReducer from "./reducers/authReducer"
import LoginContext from "./contexts/loginContext"





const App = () => {
  const [user, loginDispatch] = useReducer(authReducer, '');

  const [todos, todoDispatch] = useReducer(todoReducer,[])

  return (
  <>


  {/* <Counter/> */}
{/* <Todo/> */}
{/* <Login/> */}

<TodoContext.Provider value={{todos,Dispatch: todoDispatch}}>
  <LoginContext.Provider value={{user, Dispatch: loginDispatch}}>
  <MyNavbar/>
  <HomePage/>
  </LoginContext.Provider>

</TodoContext.Provider>

  </>
  )
}

export default App