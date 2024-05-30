import { faDribbble, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faComment, faEnvelope, faGripVertical, faHome, faShapes, faStream, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export default function MenuBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('#home');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (item) => {
        setActiveItem(item);
        setIsMenuOpen(false);
    };

    return (
        <>
            <div onClick={toggleMenu} className="menu-toggle">
                <span className="icon-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </span>
            </div>
            <div className={`responsive-sidebar-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="overlay" onClick={toggleMenu}></div>
                <div className="sidebar-menu-inner" style={{ marginRight: isMenuOpen ? '0' : '' }}>
                    <div className="menu-wrap">
                        <p>Menu</p>
                        <ul className="menu scroll-nav-responsive d-flex">
                            <li>
                                <a className={`scroll-to ${activeItem === '#home' ? 'active' : ''}`} href="#home" onClick={() => handleMenuItemClick('#home')}>
                                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a className={`scroll-to ${activeItem === '#about' ? 'active' : ''}`} href="#about" onClick={() => handleMenuItemClick('#about')}>
                                    <FontAwesomeIcon icon={faUser} /> <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a className={`scroll-to ${activeItem === '#resume' ? 'active' : ''}`} href="#resume" onClick={() => handleMenuItemClick('#resume')}>
                                    <FontAwesomeIcon icon={faBriefcase} /> <span>Resume</span>
                                </a>
                            </li>
                            <li>
                                <a className={`scroll-to ${activeItem === '#services' ? 'active' : ''}`} href="#services" onClick={() => handleMenuItemClick('#services')}>
                                    <FontAwesomeIcon icon={faStream} /> <span>Services</span>
                                </a>
                            </li>
                            <li>
                                <a className={`scroll-to ${activeItem === '#skills' ? 'active' : ''}`} href="#skills" onClick={() => handleMenuItemClick('#skills')}>
                                    <FontAwesomeIcon icon={faShapes} /> <span>Skills</span>
                                </a>
                            </li>
                            <li>
                                <a className={`scroll-to ${activeItem === '#portfolio' ? 'active' : ''}`} href="#portfolio" onClick={() => handleMenuItemClick('#portfolio')}>
                                    <FontAwesomeIcon icon={faGripVertical} /> <span>Portfolios</span>
                                </a>
                            </li>
                            {/* <li>
                                <a className={`scroll-to ${activeItem === '#testimonial' ? 'active' : ''}`} href="#testimonial" onClick={() => handleMenuItemClick('#testimonial')}>
                                    <FontAwesomeIcon icon={faComment} /> <span>Testimonial</span>
                                </a>
                            </li> */}
                            <li>
                                <a className={`scroll-to ${activeItem === '#contact' ? 'active' : ''}`} href="#contact" onClick={() => handleMenuItemClick('#contact')}>
                                    <FontAwesomeIcon icon={faEnvelope} /> <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="sidebar-social">
                        <p>Social</p>
                        <ul className="social-links d-flex align-items-center">
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter}/>                                
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <FontAwesomeIcon icon={faDribbble}/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <FontAwesomeIcon icon={faInstagram}/>
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>

            <div className="menu-container">
                <ul className="menu scroll-nav">
                    <li>
                        <a className={`scroll-to ${activeItem === '#home' ? 'active' : ''}`} href="#home" onClick={() => handleMenuItemClick('#home')}>
                            <span>Home</span>
                            <FontAwesomeIcon icon={faHome} />
                        </a>
                    </li>
                    <li>
                        <a className={`scroll-to ${activeItem === '#about' ? 'active' : ''}`} href="#about" onClick={() => handleMenuItemClick('#about')}>
                            <span>About</span>
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                    </li>
                    <li>
                        <a className={`scroll-to ${activeItem === '#resume' ? 'active' : ''}`} href="#resume" onClick={() => handleMenuItemClick('#resume')}>
                            <span>Resume</span>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </a>
                    </li>
                    <li>
                        <a className={`scroll-to ${activeItem === '#services' ? 'active' : ''}`} href="#services" onClick={() => handleMenuItemClick('#services')}>
                            <span>Services</span>
                            <FontAwesomeIcon icon={faStream} />
                        </a>
                    </li>
                    <li>
                        <a className={`scroll-to ${activeItem === '#skills' ? 'active' : ''}`} href="#skills" onClick={() => handleMenuItemClick('#skills')}>
                            <span>Skills</span>
                            <FontAwesomeIcon icon={faShapes} />
                        </a>
                    </li>
                    <li>
                        <a className={`scroll-to ${activeItem === '#portfolio' ? 'active' : ''}`} href="#portfolio" onClick={() => handleMenuItemClick('#portfolio')}>
                            <span>Portfolios</span>
                            <FontAwesomeIcon icon={faGripVertical} />
                        </a>
                    </li>
                    {/* <li>
                        <a className={`scroll-to ${activeItem === '#testimonial' ? 'active' : ''}`} href="#testimonial" onClick={() => handleMenuItemClick('#testimonial')}>
                            <span>Testimonial</span>
                            <FontAwesomeIcon icon={faComment} />
                        </a>
                    </li> */}
                    <li>
                        <a className={`scroll-to ${activeItem === '#contact' ? 'active' : ''}`} href="#contact" onClick={() => handleMenuItemClick('#contact')}>
                            <span>Contact</span>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
