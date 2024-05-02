import { useRef, useState } from 'react';
import About from './components/About';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Title from './components/Title';
import { ActivePage } from './context';



function App() {
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
}

export default App
