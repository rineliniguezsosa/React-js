import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    const Logout = () =>{
        
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
                    <span className="nav-item nav-link text-primary">Rinel</span>
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