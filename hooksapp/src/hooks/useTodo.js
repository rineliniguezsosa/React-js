import { useReducer,useEffect } from "react"
import { reducer } from '../05-useReducer/TodoReducer'

export const useTodo = () =>{
    const initialState = [
        
    ] 

    const init = () =>{
        return JSON.parse(localStorage.getItem('tareas')) || [];
      }
    
    const [state, dispatch] = useReducer(reducer,initialState,init)

    useEffect(() => {
        localStorage.setItem('tareas',JSON.stringify(state))
    }, [state])  

    const handleform = (todo) =>{
        const action = {
          type:'agregar',
          payload:todo,
        }
        dispatch(action)
    }

    const removeItem = (id) =>{
        const action = {
          type:'eliminar',
          payload:id,
        }
        dispatch(action)
      }
      
    return {
        handleform
    }

}