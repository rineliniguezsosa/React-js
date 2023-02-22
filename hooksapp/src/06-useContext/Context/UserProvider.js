import { UserContext } from "./UserContext"


export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{nombre:'rinel iñiguez'}}>
        {children}
    </UserContext.Provider>
  )
}
