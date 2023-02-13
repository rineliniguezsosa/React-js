import { useCounter } from "../hooks/useCounter"


export const CounterCustomHook = () => {
  const {value,actions} = useCounter(0)

  const [ increment,decrement,reset ] = actions
  return (
    <>
        <span>contador con hook</span>
        <hr></hr>
        <span>{value}</span>
        <button onClick={()=> increment()} className="btn btn-primary">+1</button>
        <button onClick={()=> reset()} className="btn btn-primary">reset</button>
        <button onClick={()=> decrement()} className="btn btn-primary">-1</button>
    </>
  )
}
