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
        const action = {
            type:type.login,
            payload:{
                id:'146',
                name:name
            }
        }

        dispatch(action)
    }
  return (
    <AuthContext.Provider value={{...state,login:Login}}>
        {children}
    </AuthContext.Provider>
  )
}
