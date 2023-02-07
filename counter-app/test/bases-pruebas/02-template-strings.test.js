import { getsaludo } from "../../src/bases/02-template-strings";


describe('pruebas en el fichero 02-template-strings.js', () => {
    test('la funcion getsaludo debe de retornar hola rinel',()=>{
        const nombre = 'rinel';
        const msg = getsaludo(nombre)
        expect(msg).toBe(`Hola ${nombre}`)
    })
});