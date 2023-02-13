import { useCounter } from "../hooks/useCounter"


export const CounterCustomHook = () => {
  const {value} = useCounter(0)
  return (
    <>
        <span>contador con hook</span>
        <hr></hr>
        <span>{value}</span>
        <button className="btn btn-primary">+1</button>
        <button className="btn btn-primary">reset</button>
        <button className="btn btn-primary">-1</button>
    </>
  )
}
