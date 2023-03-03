import { type } from "../../auth/types/types";


describe('pruebas en los types.js', () => {
   test('debe ser igual al type', () => {
    expect(type).toEqual({login:'auth login',logout:'auth logout'}); 
   });
});