import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import { Provider } from 'react-redux'
import { store } from "./store"


export const JournalApp = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
        <AppRouter></AppRouter>
    </BrowserRouter>
    </Provider>
  )
}
