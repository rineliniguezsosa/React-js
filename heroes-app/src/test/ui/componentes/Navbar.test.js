import { Navbar } from "../../../ui/components/Navbar";
import { render,screen } from "@testing-library/react";
import { AuthContext } from "../../../auth";


describe('pruebas en el componente Navbar.js', () => {
    const initialState = {
        logged:true,
        user:{id:'234',name:'rolando fabian'},
        Logoutlogin:jest.fn()
    }

    beforeEach(()=>{
        jest.clearAllMocks()
    })
    test('debe de mostrar el nombre del usuario autenticado', () => {
        render(<AuthContext.Provider value={initialState}>

        </AuthContext.Provider>)
    });
});