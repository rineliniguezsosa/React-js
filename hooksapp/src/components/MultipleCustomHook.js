import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHook = () => {
  const {} = useFetch("https://api.breakingbadquotes.xyz/v1/quotes/5")
  return (
    <div>MultipleCustomHook</div>
  )
}
