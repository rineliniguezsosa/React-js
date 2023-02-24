import { reducer } from "../../05-useReducer/TodoReducer";


describe('pruebas en TodoReducer', () => {

    const initialState = [{
        id:1,
        todo:'terminar curso react fh',
        done:false
    }]

    test('debe de retornar el state inicial', () => {
        const fnreducer = reducer(initialState,{})

        expect(fnreducer).toBe(initialState);
    });

    test('debe de agregar un todo', () => {
        
    });
});