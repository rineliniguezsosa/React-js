import { UserContext } from "./UserContext"
import { useState } from 'react';



export const UserProvider = ({children}) => {
    const usuario = [
        {
            id:123,
            nombre:"rinel iñiguez sosa"
        },
    ]
    const [user, setUser] = useState(usuario)
  return (
    <UserContext.Provider value={{nombre:'rinel iñiguez',user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
