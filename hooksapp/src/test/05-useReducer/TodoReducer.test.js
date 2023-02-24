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
        const action = {
            type:'agregar',
            payload: {
                id:2,
                descripcion:'recolectar la piedra filosofal de harry pother',
                realizado:false,
            }
        }
        const fnreducer = reducer(initialState,action)
        
         expect(fnreducer).toContain(action.payload);
    });

    test('debe de remover un item', () => {
        const action = {
            type:'eliminar',
            payload:1
        }

        const fnreducer = reducer(initialState,action)

        expect(fnreducer.length).toBe(0);
    });
   
    test('debe de realizar el completado', () => {
        const action = {
            type:'completado',
            payload:1
        }
    });
});