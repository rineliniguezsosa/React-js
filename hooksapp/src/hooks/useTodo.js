import { useReducer } from "react"
import { reducer } from '../05-useReducer/TodoReducer'

export const useTodo = () =>{
    const [state, dispatch] = useReducer(reducer,initialState,init)

    const handleform = (todo) =>{
        const action = {
          type:'agregar',
          payload:todo,
        }
        dispatch(action)
    }
    return {
        handleform
    }

}