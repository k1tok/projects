import React from 'react';
import cl from './css/MyIcons.module.css'

const MyIcons = ({img}) => {
    return (
        <div className={cl.myIcon}>
            <img src={img} alt="" />
        </div>
    );
};

export default MyIcons;