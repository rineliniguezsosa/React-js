import { reducer } from "../../../auth/context/AuthReducer";


describe('pruebas en AuthReducer', () => {
    
    test('debe de retornar el state por defecto', () => {
        
        const state = {
            logged:false
        }

        const fnreducer = reducer(state,{})
       
    });

});