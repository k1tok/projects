import React, { useContext, useRef } from 'react';
import MyIcons from './UI/icons/MyIcons';
import tg from '../assets/images/telegram.svg'
import hh from '../assets/images/hh.svg'
import mail from '../assets/images/mail.svg'
import { ActivePage } from '../context';
import { useObserver } from '../hooks/useObserver';

const Contacts = ({setRef}) => {
    const { isActivePage, setIsActivePage } = useContext(ActivePage);
    const contactsLink = useRef();
    const observer = useObserver(contactsLink, () => {
        setIsActivePage('contactLink');
    });


    return (
        <footer ref={setRef} className='contacts'>
            <div ref={contactsLink} className="contacts__title">
                КОНТАКТЫ
            </div>
            <div className="contacts__text">
                Давайте сотрудничать вместе!
            </div>
            <div className="contacts__icons">
                <MyIcons
                    img={tg}
                />
                <MyIcons
                    img={mail}
                />
                <MyIcons
                    img={hh}
                />
            </div>
            <div className="contacts__creator">
                (c) Kushu Zaur
            </div>
        </footer>
    );
};

export default Contacts;