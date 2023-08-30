import { NavLink } from 'react-router-dom';
import '../Header/header.css'
import Logout from './logout';
import { useState } from 'react';

function Header(props) {
    const [isActive, setIsActive] = useState(false);

    const handleLogoutClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };
    return (
        <header>
            <div className='container'>
                <div className="header-flexrow">
                    <nav className='menu'>
                        <div className='box-logo'></div>
                    </nav>
                    <div onClick={handleLogoutClick} className={`login-block ${isActive ? "active" : ""}`}>
                        {props.isAuth ? <Logout {...props}/> : <NavLink to={'/login'}>Login</NavLink>}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;