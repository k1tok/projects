import React from 'react';
import cl from './css/MyIcons.module.css'

const MyIcons = ({ img, path }) => {
    return (
        <div className={cl.myIcon}>
            <a href={path} target='blank'>
                <img src={img} alt="" />
            </a>
        </div>
    );
};

export default MyIcons;