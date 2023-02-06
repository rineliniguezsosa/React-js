

export function Firstapp() {
  const obj = {
    name:'rinel',
    email:'rineliniguezsosa@gmail.com'
  }
  return (
    <>
        <h1>Rinel</h1>
        <p>{JSON.stringify(obj)}</p>
    </>
  )
}
