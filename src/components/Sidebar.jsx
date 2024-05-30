import React from 'react'
import Me from '../images/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Sidebar() {
    return (
        <div>
            <div class="left-sidebar">
                {/* <div class="sidebar-header d-flex align-items-center justify-content-between">
                    <img src="assets/images/logo.png" alt="Logo" />
                    <span class="designation">Framer Designer &amp; Developer</span>
                </div> */}
                <img class="me" src={Me} alt="Me" />
                <h2 class="email"><a href="mailto:ramprakashsuthr2014@gmail.com" target='_blank'>ramprakashsuthr2014@gmail.com</a></h2>
                <h2 class="address">Jodhpur, Rajasthan, India</h2>
                {/* <p class="copyright">© 2022 Drake. All Rights Reserved</p> */}
                <ul class="social-profile d-flex align-items-center flex-wrap justify-content-center">
                    <li>
                        <a href="https://www.linkedin.com/in/ramprakash-suthar-a0396117a/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faDribbble} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ramsa__07/">
                            <FontAwesomeIcon icon={faInstagram} />


                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ramprakashsuthar">
                            <FontAwesomeIcon icon={faGithub} />


                        </a>
                    </li>
                </ul>
                <a href="https://wa.me/9610753037" target='_blank' class="theme-btn">
                    <FontAwesomeIcon icon={faEnvelope} />

                     Hire Me!
                </a>
            </div>
            
        </div>
    )
}
