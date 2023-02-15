import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"

export const Memorize = () => {
  const {value,actions} = useCounter(1)
  const [increment] = actions
  return (
    <>
    <h1>Memorize <Small value={value}></Small></h1>
    <hr></hr>
    <button onClick={increment} className="btn btn-primary">+1</button>
    {/* contexto: por cada cambio en el state react actualiza el dom */}
    </>
  )
}
