import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHook = () => {
  const {datos} = useFetch("https://api.breakingbadquotes.xyz/v1/quotes/5")
  console.log(datos)
  const {data,cargando,errores} = datos
  return (
    <>
    <h1>MultipleCustomHook</h1>
    <hr></hr>
    {
      cargando ?
      (
        <div className="alert alert-info text-center">
          <span>Cargando ...</span>
        </div>
      )
      :
      (
        <blockquote className="blockquote text-end">
          <p className="mb-1">Hola</p>
          <footer className="blockquote-footer">Rinel iñiguez</footer>
        </blockquote>
      )
    }
    </>
  )
}
