
export const useTodo = () =>{

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