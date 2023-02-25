import { UserContext } from "../../06-useContext/Context/UserContext";
import { Homepage } from "../../06-useContext/Homepage";
import {render,screen} from '@testing-library/react'



describe('pruebas en el componente Homepage', () => {
    
    test('debe de mostrar el componente sin el usuario', () => {
        render(<UserContext.Provider value={{nombre:null}}><Homepage/></UserContext.Provider>)

        const pre = screen.getByLabelText('nombre')

        expect(pre.innerHTML).toBe('null');

        //screen.debug()
    });

});