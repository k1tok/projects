import React, { useContext, useRef } from 'react';
import MyApp from './UI/app/MyApp';
import gallowGame from '../assets/images/gallowGame.png'
import watch from '../assets/images/watch.png'
import lending1 from '../assets/images/landing1.png'
import lending2 from '../assets/images/landing2.png'
import posts from '../assets/images/posts.png'
import { ActivePage } from '../context';
import { useObserver } from '../hooks/useObserver';

const Projects = ({setRef}) => {
    const { isActivePage, setIsActivePage } = useContext(ActivePage);
    const projectsLink = useRef();
    const observer = useObserver(projectsLink, () => {
        setIsActivePage('projectsLink');
    });

    return (
        <section ref={setRef} className="projects">
            <div className="projects__title"  ref={projectsLink}>
                ПРОЕКТЫ
            </div>
            <div className="projects__apps">
                <MyApp
                    title={'Игра в виселицу'}
                    text={'JS'}
                    image={gallowGame}
                    linkIt={true}
                    path={'https://htmlpreview.github.io/?https://github.com/k1tok/projects/blob/main/gallowsGame/index.html'}
                />
                <MyApp
                    title={'webovio'}
                    text={'JS'}
                    image={lending1}
                    linkIt={false}
                />
                <MyApp
                    title={'Розыгрыш консолей'}
                    text={'JS'}
                    image={lending2}
                    linkIt={false}
                />
                <MyApp
                    title={'Секундомер'}
                    text={'JS'}
                    image={watch}
                    linkIt={true}
                    path={'https://htmlpreview.github.io/?https://github.com/k1tok/projects/blob/main/watch/index.html'}
                />
                <MyApp
                    title={'Имитированная соц. сеть'}
                    text={'React JS + axios + ...'}
                    image={posts}
                    linkIt={true}
                    path={'/socialNet'}
                />


            </div>
        </section>
    );
};

export default Projects;