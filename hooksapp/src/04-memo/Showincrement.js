

export const Showincrement = ({incrementar}) => {
    console.log('me volvi a incrementar')
  return (
    <button onClick={()=> incrementar(5)} className="btn btn-primary">increment</button>
  )
}
