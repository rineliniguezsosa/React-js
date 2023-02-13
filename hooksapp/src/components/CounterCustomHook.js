import { useCounter } from "../hooks/useCounter"


export const CounterCustomHook = () => {
  return (
    <>
        <span>contador con hook</span>
        <hr></hr>
        <button className="btn btn-primary">+1</button>
        <button className="btn btn-primary">reset</button>
        <button className="btn btn-primary">-1</button>
    </>
  )
}
