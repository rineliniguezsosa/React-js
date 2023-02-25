import { UserContext } from '../../06-useContext/Context/UserContext';
import { Loginpage } from '../../06-useContext/Loginpage'
import {render,screen} from '@testing-library/react'


describe('pruebas en el componente Loginpage', () => {
    test('debe de mostrar el componente sin el usuario', () => {
        render(<UserContext.Provider value={{user:null}}><Loginpage></Loginpage></UserContext.Provider>)
        const pre = screen.getByLabelText('nombre')
        expect(pre.innerHTML).toBe('null');
        screen.debug()
    });
});