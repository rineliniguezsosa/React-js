import { useCounter } from "../hooks/useCounter"


export const Memorize = () => {
  const {value,actions} = useCounter()
  const [increment] = actions
  return (
    <>
    <h1>Memorize</h1>
    <hr></hr>
    <button className="btn btn-primary">+1</button>
    </>
  )
}
