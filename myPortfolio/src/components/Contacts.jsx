import React, { useContext, useRef } from 'react';
import MyIcons from './UI/icons/MyIcons';
import tg from '../assets/images/telegram.svg'
import hh from '../assets/images/hh.svg'
import mail from '../assets/images/mail.svg'
import gitHub from '../assets/images/github.svg'
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
                    path={'https://t.me/kitok666'}
                />
                <MyIcons
                    img={mail}
                    path={'mailto:busykushu@yandex.ru?subject=Сотрудничество'}
                />
                <MyIcons
                    img={hh}
                    path={'https://hh.ru/resume/5d2484f7ff0bb4c6b20039ed1f6f356e354a37'}
                />
                <MyIcons
                    img={gitHub}
                    path={'https://github.com/k1tok'}
                />
            </div>
            <div className="contacts__creator">
                (c) Kushu Zaur
            </div>
        </footer>
    );
};

export default Contacts;