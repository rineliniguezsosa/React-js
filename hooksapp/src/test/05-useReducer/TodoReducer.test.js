import { reducer } from "../../05-useReducer/TodoReducer";


describe('pruebas en TodoReducer', () => {

    const initialState = [{
        id:1,
        descripcion:'terminar curso react fh',
        realizado:false
    }]

    test('debe de retornar el state inicial', () => {
        const fnreducer = reducer(initialState,{})

        expect(fnreducer).toBe(initialState);
    });

    
    test('debe de agregar un todo', () => {
        
    });
});