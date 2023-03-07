import { useContext, useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.png';
import '../../styles/header.css';
import useOutsideAlerter from '../../utils/useOutsideAlerter';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai';
import { MdEngineering } from 'react-icons/md';
import { BsTools } from 'react-icons/bs';
import useActiveSection from '../../utils/customHooks/useActiveSection';
import { SectionEnum } from '../../utils/enum/sectionEnum';
import AppContext from '../../context/AppContext';



const Header = () => {
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    const [activeSection, setActiveSection] = useContext(AppContext)
    
    const handleBurgerClick = () => {
        setIsBurgerActive(!isBurgerActive);
    };
    const handleSectionClick = (sectionName: SectionEnum) => {
        console.log(activeSection)
        setActiveSection(sectionName);
        
        setIsBurgerActive(false);
    };

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, isBurgerActive, setIsBurgerActive);

    return (
        <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={logo} alt="Logo" />
                </a>

                <button
                    className={`navbar-burger burger ${isBurgerActive ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={handleBurgerClick}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div
                ref={wrapperRef}
                className={`navbar-menu ${isBurgerActive ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <a className="navbar-item navbar-item-button"
                        onClick={() => handleSectionClick(SectionEnum.HOME)}
                    >
                        <span className="icon">
                            <AiOutlineHome />
                        </span>
                        Inicio
                    </a>
                    <a className="navbar-item navbar-item-button"
                        onClick={() => handleSectionClick(SectionEnum.ABOUT)}
                    >
                        <span className="icon">
                            <AiOutlineInfoCircle />
                        </span>
                        Quienes somos
                    </a>
                    <a className="navbar-item navbar-item-button" href="/">
                        <span className="icon ">
                            <AiOutlineMail />
                        </span>
                        Contacto
                    </a>
                    <a className="navbar-item navbar-item-button" href="/">
                        <span className="icon">
                            <MdEngineering />
                        </span>
                        Capacidades
                    </a>
                    <a className="navbar-item navbar-item-button" href="/">
                        <span className="icon">
                            <BsTools />
                        </span>
                        Experiencia
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
