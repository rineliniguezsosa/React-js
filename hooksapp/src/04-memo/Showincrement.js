

export const Showincrement = ({incrementar}) => {
  return (
    <button onClick={()=> incrementar()} className="btn btn-primary">increment</button>
  )
}
