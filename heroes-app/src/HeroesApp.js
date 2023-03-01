import { AppRouter } from '../src/router/AppRouter'
import { AuthProvider } from './auth'


export const HeroesApp = () => {
  return (
      <AuthProvider>
        <AppRouter></AppRouter>
      </AuthProvider>
  )
}
