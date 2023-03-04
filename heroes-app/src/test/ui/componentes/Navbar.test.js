import { Navbar } from "../../../ui/components/Navbar";
import { render,screen,fireEvent } from "@testing-library/react";
import { AuthContext } from "../../../auth";
import { MemoryRouter } from "react-router-dom";


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
            <MemoryRouter>
                <Navbar></Navbar>
            </MemoryRouter>
        </AuthContext.Provider>)

        screen.debug()

        expect(screen.getByText('rolando fabian')).toBeTruthy();
    });

    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => {
        
        render(<AuthContext.Provider value={initialState}>
            <MemoryRouter>
                <Navbar></Navbar>
            </MemoryRouter>
        </AuthContext.Provider>)

        const btnlogout = screen.getByRole('button',{name:'Logout'})
        fireEvent.click(btnlogout)
        //console.log(btnlogout)

        expect(initialState.Logoutlogin).toHaveBeenCalled();

    });
});