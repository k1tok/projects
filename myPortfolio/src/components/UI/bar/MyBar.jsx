import React from 'react';
import cl from './css/MyBar.module.css'

const MyBar = ({ nameSkill, progress, myClass }) => {
    return (
        <div className={[myClass, cl.myBar].join(' ')}>
            <div className={cl.myBar__title}>
                {nameSkill}
            </div>
            <div className={cl.myBar__fullBar}>

                <div className={cl.myBar__fullBar__progressBar} style={{ width: `${progress}%` }}>

                </div>
            </div>
        </div>
    );
};

export default MyBar;