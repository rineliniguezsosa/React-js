import { getheroebyid } from "../../src/bases/09-Promesas"


describe('pruebas en el archivo 09-Promesas.js', () => { 
    test('getheroebyid debe de retonar un heroe',(done)=>{
        const id = 1;
        getheroebyid(id)
            .then(hero => {
                expect(hero).toEqual({ 
                    id: 1, 
                    name: 'Batman', 
                    owner: 'DC'
                })
                done();
        })
        
    })
    test('getheroebyid debe de retonar un error si heroe no existe',(done)=>{
        const id = 100;
        getheroebyid(id)
            .catch(error => {
                // eslint-disable-next-line jest/no-conditional-expect
                expect(error).toBe('No existe el id')
                done();
        })
    })
 })