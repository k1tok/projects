import React, { useState } from 'react';
import '../css/styles.css'
import navLogo from '../assets/images/navigation.svg'

const Navbar = () => {

    const [isActive, setIsActive] = useState('disable');
    const showMenu = () => {
        isActive == 'disable' ? setIsActive('active') : setIsActive('disable');
    }

    return (
        <nav className='navPanel'>
            <div className="navBtn">
                <img onClick={() => showMenu()} className='navLogo' src={navLogo} alt="" />
            </div>
            <div className={['navbar', isActive].join(' ')}>
                <div className="navbar__home mainLink link">
                    ДОМОЙ
                </div>
                <div className="navbar__about link">
                    ОБО МНЕ
                </div>
                <div className="navbar__portfolio link">
                    ПОРТФОЛИО
                </div>
                <div className="nabar__contact link">
                    КОНТАКТЫ
                </div>
            </div>
        </nav>
    );
};

export default Navbar;