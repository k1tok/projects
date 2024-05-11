import React from 'react';
import { ActivePage } from '../context';
import { useRef } from 'react';
import { useState } from 'react';
import Title from './Title';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';

const Portfolio = () => {
    const [isActivePage, setIsActivePage] = useState('');
    const pageRefs = {
        title: useRef(null),
        about: useRef(null),
        projects: useRef(null),
        contacts: useRef(null)
    }

    return (
        <ActivePage.Provider value={{
            isActivePage,
            setIsActivePage
        }}>
            <Title setRef={pageRefs.title} pageRefs={pageRefs} />
            <Navbar pageRefs={pageRefs} />
            <About setRef={pageRefs.about} />
            <Projects setRef={pageRefs.projects} />
            <Contacts setRef={pageRefs.contacts} />
        </ActivePage.Provider>
    )
};

export default Portfolio;