
export const reducer = (initialState,action) =>{
    switch (action.type) {
        case 'agregar':
            return [...initialState,action.payload]
    
        default:
            break;
    }
}