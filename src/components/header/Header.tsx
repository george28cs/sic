import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.png';
import '../../styles/header.css';
import useOutsideAlerter from '../../utils/useOutsideAlerter'
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai';

const Header = () => {
    const [isBurgerActive, setIsBurgerActive] = useState(false);

    const handleBurgerClick = () => {
        setIsBurgerActive(!isBurgerActive);
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
                    <a className="navbar-item navbar-item-button" href="#Home">
                    <span className="icon is-size-4">
              <AiOutlineHome />
            </span>
                        Home
                    </a>
                    <a className="navbar-item navbar-item-button" href="">
                    <span className="icon is-size-4">
              <AiOutlineInfoCircle />
            </span>
                        About Us
                    </a>
                    <a className="navbar-item navbar-item-button" href="/">
                    <span className="icon is-size-4">
              <AiOutlineMail />
            </span>
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
