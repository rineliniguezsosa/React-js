import { useReducer } from "react";
import { type } from "../types/types";
import { AuthContext } from "./AuthContext";
import { reducer } from "./AuthReducer";

export const AuthProvider = ({children}) => {
    const initialState = {
        logged:false
    }

    const init = () =>{
        const user = JSON.parse(localStorage.getItem('user'))
        
        return {
            logged:!!user, //retornamos el state
            user:user
        }
    }

    const [state, dispatch] = useReducer(reducer,initialState,init)

    const Login = (name = '') =>{

        const user = {id:'124',name} //1) localstorage

        const action = {
            type:type.login,
            payload:user //2) localstorage
        }
        localStorage.setItem('user',JSON.stringify(user)) //3 LocalStorage

        dispatch(action)
    }
  return (
    <AuthContext.Provider value={{...state,login:Login}}>
        {children}
    </AuthContext.Provider>
  )
}
