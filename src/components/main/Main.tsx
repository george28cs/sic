import '../../styles/main.css';
import '../../assets/icomoon/icomoon.css';
import { Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import { useContext } from 'react';
import { SectionEnum } from '../../utils/enum/sectionEnum';
import AppContext from '../../context/AppContext';
import Capabilities from './Capabilities';
import Experience from './Experience';
import Contact from './Contact';

export default function Main() {
  const [activeSection] = useContext(AppContext)

  return (
    <div className='main'>
      <div className='main-content'>
        {activeSection === SectionEnum.HOME && <Home />}
        {activeSection === SectionEnum.ABOUT && <About />}
        {activeSection === SectionEnum.CAPABILITIES && <Capabilities />}
        {activeSection === SectionEnum.EXPERIENCE && <Experience />}
        {activeSection === SectionEnum.CONTACT && <Contact />}

      </div>
    </div>
  );
}