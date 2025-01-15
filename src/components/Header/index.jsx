import { Link, useLocation } from 'react-router';
import LOGO from '../../assets/LOGO.png'
import '../../styles/Header.scss'
function Header() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    
    return (
        <header>
            <nav className='nav'>
                <div className='nav-div'>
                    <img src={LOGO} className='logo' alt='Logo M.S-Ramety'/>
                    <p>M.S-Ramety</p>
                </div>
                <ul className='nav-list'>
                    <li>
                        <Link 
                            to='/'
                            className={`nav-list__link ${isActive('/') ? 'active' : ''}`}>
                                Accueil
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to='/stories'
                            className={`nav-list__link ${isActive('/stories') ? 'active' : ''}`}>
                                Histoires
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to='/universeandcharacters'
                            className={`nav-list__link ${isActive('/universeandcharacters') ? 'active' : ''}`}>
                                Univers et Personnages
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to='/flash'
                            className={`nav-list__link ${isActive('/flash') ? 'active' : ''}`}>
                                Flash
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to='/about'
                            className={`nav-list__link ${isActive('/about') ? 'active' : ''}`}>
                                A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
export default Header;