
export const reducer = (initialState,action) =>{
    switch (action.type) {
        case 'agregar':
            return [...initialState,action.payload]
        case 'eliminar':
            return initialState.filter(removeitem => removeitem.id !== action.payload)
        case 'completado':
            return initialState.map(elemento =>{
                if(elemento.id === action.payload) {
                    return {
                        ...elemento,
                        realizado:!elemento.realizado
                    }
                }
                return elemento;
            })
        default:
            return initialState;
    }
}