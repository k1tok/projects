import React from 'react';
import cl from './css/MyApp.module.css';

const MyApp = ({ image, title, text, linkIt, ...props }) => {
    return (
        <div {...props} className={cl.myApp}>

            <div className={cl.myApp__block}>
                <img src={image} alt="" />
            </div>
            <div className={cl.myApp__info}>
                <div className={cl.myApp__info__title}>
                    {title}
                </div>
                <div className={cl.myApp__info__text}>
                    {text}
                </div>
                {linkIt
                    ? <div className={cl.myApp__info__link}>
                        ПЕРЕЙТИ
                    </div>
                    : ''
                }
            </div>
        </div>
    );
};

export default MyApp;