import { useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { reducer } from "./AuthReducer";

export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
  )
}
