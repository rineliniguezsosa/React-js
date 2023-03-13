import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import { Provider } from 'react-redux'

export const JournalApp = () => {
  return (
    <Provider>
    <BrowserRouter>
        <AppRouter></AppRouter>
    </BrowserRouter>
    </Provider>
  )
}
