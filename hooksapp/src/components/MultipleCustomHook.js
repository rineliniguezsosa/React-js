import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHook = () => {
  const {datos} = useFetch("https://api.breakingbadquotes.xyz/v1/quotes/5")
  console.log(datos)
  return (
    <div>MultipleCustomHook</div>
  )
}
