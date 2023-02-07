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
 })