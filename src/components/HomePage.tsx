import Todo from "./Todo"


const HomePage = () => {
  return (
    <>
        <h1 className="text-center">My Home Page</h1>
        <h2 className="text-center">Global Statge Management: UseContext Example</h2>
        <div className="container-fluid">
            <div className="row">
                <Todo/>

            </div>


        </div>

    </>
  )
}

export default HomePage