import { useReducer } from "react";
import { type } from "../types/types";
import { AuthContext } from "./AuthContext";
import { reducer } from "./AuthReducer";

export const AuthProvider = ({children}) => {
    const initialState = {
        logged:false
    }
    const [state, dispatch] = useReducer(reducer,initialState)

    const Login = (name = '') =>{

        const user = {id:'124',name} //1) localstorage

        const action = {
            type:type.login,
            payload:user //2) localstorage
        }

        dispatch(action)
    }
  return (
    <AuthContext.Provider value={{...state,login:Login}}>
        {children}
    </AuthContext.Provider>
  )
}
