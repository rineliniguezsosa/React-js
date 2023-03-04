import { Navbar } from "../../../ui/components/Navbar";
import { render,screen } from "@testing-library/react";

describe('pruebas en el componente Navbar.js', () => {
    const initialState = {
        logged:true,
        user:{id:'234',name:'rolando fabian'},
        Logoutlogin:jest.fn()
    }

    beforeEach(()=>{
        
    })
    test('debe de mostrar el nombre del usuario autenticado', () => {
        
    });
});