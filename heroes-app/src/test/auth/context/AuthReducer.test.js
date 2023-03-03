import { reducer } from "../../../auth/context/AuthReducer";


describe('pruebas en AuthReducer', () => {
    
    test('debe de retornar el state por defecto', () => {
        
        const state = {
            logged:false
        }

        const fnreducer = reducer(state,{})
        console.log(fnreducer)
        expect(fnreducer).toEqual({logged:false});
    });

    test('debe de llamar al login autenticar y establecer el user', () => {
        const state = {
            logged:false
        }
        
        const action = {
            type:'auth login',
            payload:{id:'124',name:'Rinel iñiguez'}
        }

        const { user } = reducer(state,action)
        
        console.log(user.name)
        expect(user.name).toBe('Rinel iñiguez');
    });

    test('debe de borrar el name del usuario y logged en false', () => {
        const state = {
            logged:true,
            payload:{id:'124',name:'eloy'}
        }     
    });
});