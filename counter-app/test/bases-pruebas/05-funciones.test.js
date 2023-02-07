import { getusuario } from "../../src/bases/05-funciones";


describe('pruebas en el archivo 05-funciones.js', () => {
    test('la funcion getusuario debe de retornar un objeto',()=>{
        const nombre = 'rinel';
        const user =  {
            uid:'123',
            username:nombre
        }
        
        const result = getusuario(nombre)

        expect(result).toEqual(user);
    })
});