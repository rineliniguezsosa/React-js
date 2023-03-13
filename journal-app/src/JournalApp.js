import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import { Provider } from 'react-redux'

export const JournalApp = () => {
  return (
    <BrowserRouter>
        <AppRouter></AppRouter>
    </BrowserRouter>
  )
}
