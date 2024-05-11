import React, { useContext, useState } from 'react';
import navLogo from '../assets/images/navigation.svg';
import '../css/styles.css';
import { ActivePage } from '../context';

const Navbar = ({ pageRefs }) => {

    const { isActivePage } = useContext(ActivePage);

    const [isActive, setIsActive] = useState('disable');
    const showMenu = () => {
        isActive == 'disable' ? setIsActive('active') : setIsActive('disable');
    }

    const scrollTo = (refName) => {
        if (pageRefs[refName].current) {
            pageRefs[refName].current.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => setIsActive('disable'), 0);
        }
    };




    return (
        <nav className='navPanel'>
            <div className="navBtn">
                <img onClick={() => showMenu()} className='navLogo' src={navLogo} alt="" />
            </div>
            <div className={['navbar', isActive].join(' ')}>
                <div onClick={() => {scrollTo('title')}} className={["navbar__home", 'link', isActivePage == 'titleLink' ? 'mainLink' : ''].join(' ')}>
                    ДОМОЙ
                </div>
                <div onClick={() => {scrollTo('about')}} className={["navbar__about", 'link', isActivePage == 'aboutLink' ? 'mainLink' : ''].join(' ')}>
                    ОБО МНЕ
                </div>
                <div onClick={() => {scrollTo('projects')}} className={["navbar__portfolio", 'link', isActivePage == 'projectsLink' ? 'mainLink' : ''].join(' ')}>
                    ПОРТФОЛИО
                </div>
                <div onClick={() => {scrollTo('contacts')}} className={["navbar__contact", 'link', isActivePage == 'contactLink' ? 'mainLink' : ''].join(' ')}>
                    КОНТАКТЫ
                </div>
            </div>
        </nav>
    );
};

export default Navbar;