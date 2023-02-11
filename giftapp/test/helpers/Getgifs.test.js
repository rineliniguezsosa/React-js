import { getgift } from "../../src/helpers/Getgifs";

describe('Pruebas en la funcion asincrona getgift()', () => {
    test('Debe de retornar un arreglo de gifs',async () => {
        const gifs = await getgift('batman')
       // console.log(gifs[0])
       // expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id:expect.any(String),
            titulo:expect.any(String),
            url:expect.any(String)
        })
    });
});