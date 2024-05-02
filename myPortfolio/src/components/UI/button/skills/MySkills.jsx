import React from 'react';
import cl from './css/MySkills.module.css'

const MySkills = ({ img, title, text, ...props }) => {
    return (
        <div {...props} className={cl.mySkills}>
            <div className={cl.skillsImg}>
                <img src={img} alt="" />
            </div>
            <div className={cl.skillsTitle}>
                {title}
            </div>
            <div className={cl.skillsText}>
                {text}
            </div>
        </div>
    );
};

export default MySkills;