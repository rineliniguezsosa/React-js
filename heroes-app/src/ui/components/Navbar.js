import { useContext } from 'react';
import { Link, NavLink,useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';



export const Navbar = () => {
    const navigate = useNavigate()
    const {user,Logoutlogin} = useContext(AuthContext)
    
    const Logout = () =>{

        Logoutlogin();

        navigate('/login',{
            replace:true
        })
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`${isActive ? 'active' : ''} nav-item nav-link `} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`${isActive ? 'active' : ''} nav-item nav-link `} 
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                    
                    <NavLink 
                        className={({isActive})=>`${isActive ? 'active' : ''} nav-item nav-link `} 
                        to="/hero"
                    >
                        Hero
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">{user?.name}</span>
                    <button 
                        className="nav-item nav-link btn" 
                        onClick={Logout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}