import React from 'react';
import MyButton from './UI/button/MyButton';
import arrowLogo from '../assets/images/arrow.svg'

import '../css/styles.css'


const Title = () => {
    return (
        <div>
            <div className='title'>
                <div className="title__text">
                    <p>
                        Привет, меня зовут <span className='title__text__name'>Заур</span>.
                    </p>
                    <p>
                        Я Front-End Developer!
                    </p>
                </div>
                <div className="title__button">
                    <MyButton>Посмотреть на мои работы <img className='arrowImage' src={arrowLogo} alt="Arrow"></img></MyButton>
                </div>
            </div>
        </div>
    );
};

export default Title;