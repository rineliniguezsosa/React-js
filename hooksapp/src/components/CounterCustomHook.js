import { useCounter } from "../hooks/useCounter"


export const CounterCustomHook = () => {
  const {value,actions} = useCounter(0)

  const [ increment ] = actions
  return (
    <>
        <span>contador con hook</span>
        <hr></hr>
        <span>{value}</span>
        <button onClick={()=> increment()} className="btn btn-primary">+1</button>
        <button className="btn btn-primary">reset</button>
        <button className="btn btn-primary">-1</button>
    </>
  )
}
