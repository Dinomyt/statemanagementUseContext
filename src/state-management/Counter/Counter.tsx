import useCounterStore from "./store";


const Counter = () => {

const counterStore = useCounterStore();
//Or destructure it
//const {counter, increment, decrement, reset} = useCounterStore();

  return (
    <div>
    <h1 className="text-center">My Counter Component</h1>
 <div>
      <h1>Counter: {counterStore.counter}</h1>
      <button className="btn btn-primary mx-3" onClick={counterStore.increment}>Increment</button>
      <button className="btn btn-primary mx-3" onClick={counterStore.decrement}>Decrement</button>
      <button className="btn btn-primary" onClick={counterStore.reset}>Reset</button>
    </div>
    
    </div>
  )
}

export default Counter