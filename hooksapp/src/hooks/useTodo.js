
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