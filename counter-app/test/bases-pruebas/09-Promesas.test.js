import { getheroebyid } from "../../src/bases/09-Promesas"


describe('pruebas en el archivo 09-Promesas.js', () => { 
    test('getheroebyid debe de retonar un heroe',()=>{
        const id = 1;
        const data = getheroebyid(id)
    })
 })