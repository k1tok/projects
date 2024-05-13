import React, { useContext, useRef } from 'react';
import MySkills from './UI/button/skills/MySkills';
import reactLogo from '../assets/react.svg';
import MyBar from './UI/bar/MyBar';
import { ActivePage } from '../context';
import { useObserver } from '../hooks/useObserver';


const About = ({ setRef }) => {
    const { isActivePage, setIsActivePage } = useContext(ActivePage);
    const aboutLink = useRef();
    const observer = useObserver(aboutLink, () => {
        setIsActivePage('aboutLink');
    });

    return (
        <section className="about" ref={setRef} >
            <div className="about__title" ref={aboutLink}>
                ОБО МНЕ
            </div>
            <div className="about__skills animation">
                <MySkills
                    img={reactLogo}
                    title={'Адаптивность'}
                    text={'Разработка адаптивных интерфейсов.'}
                />
                <MySkills
                    img={reactLogo}
                    title={'Анимации'}
                    text={'Добавление анимаций к элементам интерфейса.'}
                />
                <MySkills
                    img={reactLogo}
                    title={'Компоненты'}
                    text={'Разработка компонентов высокого уровня.'}
                />
                <MySkills
                    img={reactLogo}
                    title={'Скорость'}
                    text={'Взаимодействие без задержек и быстрая загрузка.'}
                />
            </div>
            <div className="about__profile">
                <div className="about__profile__me">
                    <div className="about__profile__myPhoto">
                        <img src={reactLogo} alt="" />
                    </div>
                    <div className="about__profile__me__title">
                        Кто Я такой?
                    </div>
                    <div className="about__profile__me__text">
                        Я Front-End Developer, работающий на React!
                        У меня есть желание создавать интуитивно понятные, динамичные приложения и интерфейсы!
                        Давайте сделаем что-то особенное вместе!
                    </div>
                </div>
                <div className="about__profile__mySkills">
                    <MyBar
                        nameSkill={'CSS'}
                        progress={'80'}
                        myClass={'about__profile__mySkills__bars'}
                    />
                    <MyBar
                        nameSkill={'HTML'}
                        progress={'80'}
                        myClass={'about__profile__mySkills__bars'}
                    />
                    <MyBar
                        nameSkill={'JS'}
                        progress={'75'}
                        myClass={'about__profile__mySkills__bars'}
                    />
                    <MyBar
                        nameSkill={'React'}
                        progress={'70'}
                        myClass={'about__profile__mySkills__bars'}
                    />
                    <MyBar
                        nameSkill={'NPM'}
                        progress={'70'}
                        myClass={'about__profile__mySkills__bars'}
                    />
                    <MyBar
                        nameSkill={'Vite'}
                        progress={'70'}
                        myClass={'about__profile__mySkills__bars'}
                    />
                    <MyBar
                        nameSkill={'WEBPACK'}
                        progress={'60'}
                        myClass={'about__profile__mySkills__bars'}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;