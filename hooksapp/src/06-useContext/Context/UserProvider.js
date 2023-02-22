import { UserContext } from "./UserContext"


export const UserProvider = ({children}) => {
    const usuario = {
        id:123,
        nombre:"rinel iñiguez sosa"
    }
  return (
    <UserContext.Provider value={{nombre:'rinel iñiguez',usuario}}>
        {children}
    </UserContext.Provider>
  )
}
