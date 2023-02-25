import { UserContext } from "../../06-useContext/Context/UserContext";
import { Homepage } from "../../06-useContext/Homepage";
import {render} from '@testing-library/react'



describe('pruebas en el componente Homepage', () => {
    test('debe de mostrar el componente sin el usuario', () => {
        render(<UserContext.Provider><Homepage/></UserContext.Provider>)
    });
});