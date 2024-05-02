import React, { useContext, useRef } from 'react';
import arrowLogo from '../assets/images/arrow.svg';
import MyButton from './UI/button/MyButton';

import { ActivePage } from '../context';
import '../css/styles.css';
import { useObserver } from '../hooks/useObserver';


const Title = ({ pageRefs, setRef }) => {
    const { isActivePage, setIsActivePage } = useContext(ActivePage);
    const activeLink = useRef();
    const observer = useObserver(activeLink, () => {
        setIsActivePage('titleLink');
    });

    const scrollTo = (refName) => {
        if (pageRefs[refName].current) {
            pageRefs[refName].current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className='title' ref={setRef} >
            <div ref={activeLink} className="title__text">
                <p>
                    Привет, меня зовут <span className='title__text__name'>Заур</span>.
                </p>
                <p>
                    Я Front-End Developer!
                </p>
            </div>
            <div className="title__button">
                <MyButton onClick={() => {scrollTo('about')}}>Посмотреть на мои работы <img className='arrowImage' src={arrowLogo} alt="Arrow"></img></MyButton>
            </div>
        </section>
    );
};

export default Title;