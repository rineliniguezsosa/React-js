import { useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { reducer } from "./AuthReducer";

export const AuthProvider = ({children}) => {
    const initialState = {
        logged:false
    }
    const [state, dispatch] = useReducer(initialState, reducer)
  return (
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
  )
}
