import HomePage from "./components/HomePage"
import MyNavbar from "./components/MyNavbar"
import AuthProvider from "./state-management/Auth/AuthProvider"
import Counter from "./state-management/Counter/Counter"
import TodoProvider from "./state-management/Todos/TodoProvider"


const App = () => {


  return (
  <>


  {/* <Counter/> */}
{/* <Todo/> */}
{/* <Login/> */}


    <AuthProvider>
      <TodoProvider>
        <Counter/>
          <MyNavbar/>
          <HomePage/>
      </TodoProvider>
    </AuthProvider>



  </>
  )
}

export default App