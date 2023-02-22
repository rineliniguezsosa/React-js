import { UserContext } from "./UserContext"


export const UserProvider = () => {
  return (
    <UserContext.Provider value={{nombre:'rinel iñiguez'}}>

    </UserContext.Provider>
  )
}
