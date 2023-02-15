import { useCounter } from "../hooks/useCounter"


export const Memorize = () => {
  const {value,actions} = useCounter(1)
  const [increment] = actions
  return (
    <>
    <h1>Memorize {value}</h1>
    <hr></hr>
    <button onClick={increment} className="btn btn-primary">+1</button>
    </>
  )
}
