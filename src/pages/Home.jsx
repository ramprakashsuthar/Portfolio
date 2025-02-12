import React, { useState } from 'react'
import RoundText from '../images/round-text.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Figma from '../images/figma.png'
import ReactImg from '../images/react.png'
import Sidebar from '../components/Sidebar'
import MenuBar from '../components/MenuBar'
import SideMenu from '../components/SideMenu'
import Portfolio1 from '../images/portfolio1.png'
import Portfolio2 from '../images/portfolio2.png'
import Portfolio3 from '../images/portfolio3.png'
import HTML from '../images/html.png'
import Css from '../images/css.png'
import JavaScript from '../images/js-file.png'
import Bootstrap from '../images/bootstrap.png'
import Next from '../images/next.jpg'

import Node from '../images/programing.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function Home() {
    const settings = {
        // className: "center",
        // centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000,
    };
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            budget: '',
            message: '',
            file: null,
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Full Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            phoneNumber: Yup.string().required('Phone number is required'),
            budget: Yup.string().required('Budget is required'),
            message: Yup.string(),
        }),
        onSubmit: (values, { resetForm }) => {
            const formData = new FormData();
            formData.append('fullName', values.fullName);
            formData.append('email', values.email);
            formData.append('phoneNumber', values.phoneNumber);
            formData.append('budget', values.budget);
            formData.append('message', values.message);
            if (values.file) {
                formData.append('file', values.file);
            }

            // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            //     .then((result) => {
            //         console.log(result.text);
            //         alert('Your message was sent successfully.');
            //         resetForm();
            //     }, (error) => {
            //         console.log(error.text);
            //         alert('An error occurred, please try again.');
            //     });
        },
    });
    return (
        <div>
            <Sidebar />
            <MenuBar />
            <SideMenu />

            <section className="hero-section page-section scroll-to-page" id="home">

                <div className="custom-container">
                    <div className="hero-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">

                                <i className="las la-home"></i> Introduce
                            </h4>
                            <h1 className="scroll-animation" data-animation="fade_from_bottom">Hi from
                                <span> Ramprakash</span>, Website Developer</h1>
                        </div>
                        <p className="scroll-animation" data-animation="fade_from_bottom">I code and design beautifully simple things, and I love what I do. It's just that simple!</p>
                        <a href="#portfolio" className="go-to-project-btn scroll-to scroll-animation"
                            data-animation="rotate_up">
                            <img src={RoundText} alt="Rounded Text" />
                            <FontAwesomeIcon icon={faArrowDown} className='icon' />
                            <i className="las la-arrow-down"></i>
                        </a>

                        {/* <div className="facts d-flex">
                            <div className="left scroll-animation" data-animation="fade_from_left">
                                <h1>10+</h1>
                                <p>Years of <br />Experience</p>
                            </div>
                            <div className="right scroll-animation" data-animation="fade_from_right">
                                <h1>182+</h1>
                                <p>projects completed on <br />15 countries</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="about-area page-section scroll-to-page" id="about">
                <div className="custom-container">
                    <div className="about-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                <i className="lar la-user"></i> About
                            </h4>
                            <h1 className="scroll-animation" data-animation="fade_from_bottom">Every great web application begins with an even better<span> user experience.</span></h1>
                        </div>
                        <p className="scroll-animation" data-animation="fade_from_bottom">Since starting my journey as a front-end web developer, I've built a solid foundation in creating dynamic, responsive, and user-friendly web applications.
                            I'm proficient in HTML, CSS, JavaScript, React.js, and Next.js, and I've applied these skills at Durable Coder to develop engaging front-end components and enhance user experiences. My work involves integrating various APIs to fetch and display dynamic content, ensuring seamless functionality and user engagement.

                            Although my primary focus is on front-end development, I also have a basic understanding of backend technologies like Node.js and Express.js, which allows me to effectively collaborate with backend teams.

                        </p>
                    </div>
                </div>
            </section>


            <section className="resume-area page-section scroll-to-page" id="resume">
                <div className="custom-container">
                    <div className="resume-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                <i className="las la-briefcase"></i> Resume
                            </h4>
                            <h1 className="scroll-animation" data-animation="fade_from_bottom">Education &
                                <span> Experience</span></h1>
                        </div>

                        <div className="resume-timeline">
                            <div className="item scroll-animation" data-animation="fade_from_right">
                                <span className="date">Feb-2024 - April-2024</span>
                                <h2>Website Developer</h2>
                                <p>Durable Coder</p>
                                {/* <h2>Front-End Developer</h2> */}
                                {/* <p>Envato Market</p> */}
                            </div>
                            <div className="item scroll-animation" data-animation="fade_from_right">
                                <span className="date">May-2023 - Dec-2023</span>
                                <h2>MERN Stack Training</h2>
                                <p>WsCube Tech</p>
                                {/* <h2>Web Designer</h2> */}
                                {/* <p>Freelance</p> */}
                                {/* <h2>Leader Team of Marketing</h2> */}
                                {/* <p>AHA Marketing Agency</p> */}
                            </div>
                            <div className="item scroll-animation" data-animation="fade_from_right">
                                <span className="date">2017 - 2020</span>
                                <h2>Bachelor Degree of Electrical Engineering</h2>
                                <p>JIET, Jodhpur</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="services-area page-section scroll-to-page" id="services">
                <div className="custom-container">
                    <div className="services-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                <i className="las la-stream"></i> Services
                            </h4>
                            <h1 className="scroll-animation" data-animation="fade_from_bottom">My
                                <span> Specializations</span></h1>
                        </div>

                        <div className="services-items">
                            <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                <i className="las la-bezier-curve"></i>
                                <h2>Website Development</h2>
                                <p>I developed Websites  with unique ideas using HTML, CSS, Java Script, Bootstrp, Tailwind, ReactJs, NextJs and Figma</p>
                                <span className="projects">5 Projects</span>
                            </div>
                            <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                <i className="las la-code"></i>
                                <h2>Figma and PSD to Code</h2>
                                <p>I convert website design from figma to code </p>
                                <span className="projects">2 Projects</span>
                            </div>
                            {/* <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                <i className="las la-bezier-curve"></i>
                                <h2>SEO/Marketing</h2>
                                <p>Increase the traffic for your website with SEO optimized</p>
                                <span className="projects">8 Projects</span>
                            </div> */}
                        </div>

                    </div>
                </div>
            </section>


            <section className="skills-area page-section scroll-to-page" id="skills">
                <div className="custom-container">
                    <div className="skills-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                <i className="las la-shapes"></i> my skills
                            </h4>
                            <h1 className="scroll-animation" data-animation="fade_from_bottom">My
                                <span>Advantages</span></h1>
                        </div>

                        <div className="row skills text-center">

                            <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                <div className="skill">
                                    <div className="skill-inner">
                                        <img src={HTML} alt="Html" />
                                        {/* <h1 className="percent">85%</h1> */}
                                    </div>
                                    <p className="name">HTML</p>
                                </div>
                            </div>
                            <div className="col-md-3 scroll-animation" data-animation="fade_from_top">
                                <div className="skill">
                                    <div className="skill-inner">
                                        <img src={Css} alt="Css" />
                                        {/* <h1 className="percent">80%</h1> */}
                                    </div>
                                    <p className="name">CSS</p>
                                </div>
                            </div>
                            <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                <div className="skill">
                                    <div className="skill-inner">
                                        <img src={Bootstrap} alt="Bootstrap" />
                                        {/* <h1 className="percent">70%</h1> */}
                                    </div>
                                    <p className="name">Bootstrap</p>
                                </div>
                            </div>
                            <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                <div className="skill">
                                    <div className="skill-inner">
                                        <img src={JavaScript} alt="JavaScript" />
                                        {/* <h1 className="percent">70%</h1> */}
                                    </div>
                                    <p className="name">JavaScript</p>
                                </div>
                            </div>

                            <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                                <div className="skill">
                                    <div className="skill-inner">
                                        <img src={ReactImg} alt="React" />
                                        {/* <h1 className="percent">90%</h1> */}
                                    </div>
                                    <p className="name">React</p>
                                </div>
                            </div>

                            <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                                <div className="skill">
                                    <div className="skill-inner">
                                        <img src={Next} alt="Next.js" />
                                        {/* <h1 className="percent">90%</h1> */}
                                    </div>
                                    <p className="name">Next.js</p>
                                </div>
                            </div>

                            <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                                <div className="skill">
                                    <div className="skill-inner">
                                        <img src={Node} alt="Node.js" />
                                        {/* <h1 className="percent">90%</h1> */}
                                    </div>
                                    <p className="name">Nodejs</p>
                                </div>
                            </div>

                            <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                                <div className="skill">
                                    <div className="skill-inner">
                                        <img src={Figma} alt="Figma" />
                                        {/* <h1 className="percent">92%</h1> */}
                                    </div>
                                    <p className="name">Figma</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="portfolio-area page-section scroll-to-page" id="portfolio">
                <div className="custom-container">
                    <div className="portfolio-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                <i className="las la-grip-vertical"></i> portfolio
                            </h4>
                            <h1 className="scroll-animation" data-animation="fade_from_bottom">Live
                                <span> Projects</span></h1>
                        </div>

                        <div className="row portfolio-items">
                            <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                <div className="portfolio-item portfolio-full">
                                    <Slider {...settings}>

                                        <div className="portfolio-item-inner">
                                            <a href="https://react-app.upliftfusion.in/" target="_blank">
                                                <img src={Portfolio1} alt="Portfolio1" />
                                            </a>

                                            <ul className="portfolio-categories">
                                                <li>
                                                    <a href="#">React</a>
                                                </li>
                                                <li>
                                                    <a href="#">Figma</a>
                                                </li>
                                                <li>
                                                    <a href="#">Bootstrap</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="portfolio-item-inner">
                                            <a href="https://namaste-properties.com/" target="_blank">
                                                <img src={Portfolio2} alt="Portfolio2" />
                                            </a>

                                            <ul className="portfolio-categories">
                                                <li>
                                                    <a href="#">React</a>
                                                </li>
                                                <li>
                                                    <a href="#">Bootstrap</a>
                                                </li>
                                                <li>
                                                    <a href="#">REST API</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="portfolio-item-inner">
                                            <a href="https://durablecoder.com/" target="_blank">
                                                <img src={Portfolio3} alt="Portfolio3" />
                                            </a>

                                            <ul className="portfolio-categories">
                                                <li>
                                                    <a href="#">HTML</a>
                                                </li>
                                                <li>
                                                    <a href="#">CSS</a>
                                                </li>
                                                <li>
                                                    <a href="#">Java Script</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Slider>
                                </div>
                            </div>

                            {/* <div className="col-md-6 scroll-animation" data-animation="fade_from_left">
                                <div className="portfolio-item portfolio-half">
                                    <div className="portfolio-item-inner">
                                        <a href="assets/images/portfolio2.jpg" data-lightbox="example-1">
                                            <img src="assets/images/portfolio2.jpg" alt="Portfolio" />
                                        </a>

                                        <img src="assets/images/portfolio2.jpg" alt="Portfolio" />

                                        <ul className="portfolio-categories">
                                            <li>
                                                <a href="#">WordPress</a>
                                            </li>
                                            <li>
                                                <a href="#">Larevel/PHP</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h2><a href="#">Moonex WordPress Theme</a></h2>
                                </div>
                            </div>

                            <div className="col-md-6 scroll-animation" data-animation="fade_from_right">
                                <div className="portfolio-item portfolio-half">
                                    <div className="portfolio-item-inner">
                                        <a href="assets/images/portfolio3.jpg" data-lightbox="example-1">
                                            <img src="assets/images/portfolio3.jpg" alt="Portfolio" />
                                        </a>

                                        <ul className="portfolio-categories">
                                            <li>
                                                <a href="#">Figma</a>
                                            </li>
                                            <li>
                                                <a href="#">Webflow</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h2><a href="#">Taskly Dashboard</a></h2>
                                </div>
                            </div> */}

                            {/* <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                <div className="portfolio-item portfolio-half">
                                    <div className="portfolio-item-inner">
                                        <a href="assets/images/portfolio4.jpg" data-lightbox="example-1">
                                            <img src="assets/images/portfolio4.jpg" alt="portfolio" />
                                        </a>

                                        <ul className="portfolio-categories">
                                            <li>
                                                <a href="#">Figma</a>
                                            </li>
                                            <li>
                                                <a href="#">React</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h2><a href="#">Hinterland - Real Estate Site Redesign</a></h2>
                                </div>
                            </div>

                            <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                                <div className="portfolio-item portfolio-half">
                                    <div className="portfolio-item-inner">
                                        <a href="assets/images/portfolio5.jpg" data-lightbox="example-1">
                                            <img src="assets/images/portfolio5.jpg" alt="portfolio" />
                                        </a>

                                        <ul className="portfolio-categories">
                                            <li>
                                                <a href="#">Framer</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h2><a href="#">Lewis Portfolio Framer Template</a></h2>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </section>

            {/* 
            <section className="testimonial-area page-section scroll-to-page" id="testimonial">
                <div className="custom-container">
                    <div className="testimonial-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                <i className="lar la-comment"></i> testimonial
                            </h4>
                            <h1 className="scroll-animation" data-animation="fade_from_bottom">Trusted by <span>Hundered
                                Clients</span></h1>
                        </div>

                        <div className="testimonial-slider-wrap scroll-animation" data-animation="fade_from_bottom">
                            <div className="owl-carousel testimonial-slider owl-theme">
                                <div className="testimonial-item">
                                    <div className="testimonial-item-inner">
                                        <div className="author d-flex align-items-center">
                                            <img src="assets/images/testimonial-1.jpg" alt="portfolio"/>
                                                <div className="right">
                                                    <h3>Paublo Dybala</h3>
                                                    <p className="designation">CEO of <span>IBM Global</span></p>
                                                </div>
                                        </div>
                                        <p>“Drake - A Developer with the creativity, professional and
                                            master of code. Much more than what i'm expect.
                                            High quality product & flexiable price. Recommended!.”</p>

                                        <a href="#" className="project-btn">Project</a>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testimonial-item-inner">
                                        <div className="author d-flex align-items-center">
                                            <img src="assets/images/testimonial-2.jpg" alt="portfolio"/>
                                                <div className="right">
                                                    <h3>Christina Morillo</h3>
                                                    <p className="designation">Product Management of <span>Invision App
                                                        Inc</span></p>
                                                </div>
                                        </div>
                                        <p>“Drake was a real pleasure to work with and we look
                                            forward to working with him again. He's definitely the kind of
                                            designer that you can trust with any project from A-Z.”</p>

                                        <a href="#" className="project-btn">Project</a>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testimonial-item-inner">
                                        <div className="author d-flex align-items-center">
                                            <img src="assets/images/testimonial-3.jpg" alt="portfolio"/>
                                                <div className="right">
                                                    <h3>Phil Foden</h3>
                                                    <p className="designation">Director of <span>Envato LLC</span></p>
                                                </div>
                                        </div>
                                        <p>“Extremely profressional and fast service!. Drake is a master
                                            of code and he also very creative. We done 3 projects with
                                            him and certain will continue.”</p>

                                        <a href="#" className="project-btn">Project</a>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-footer-nav">
                                <div className="testimonial-nav d-flex align-items-center">
                                    <button className="prev"><i className="las la-angle-left"></i></button>
                                    <div id="testimonial-slide-count"></div>
                                    <button className="next"><i className="las la-angle-right"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="clients-logos">
                            <h4 className="scroll-animation" data-animation="fade_from_bottom">work with 60+ brands
                                worldwide</h4>
                            <div className="row align-items-center">
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                                    <img src="assets/images/client-1.png" alt="client"/>
                                </div>
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                    <img src="assets/images/client-2.png" alt="client"/>
                                </div>
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_top">
                                    <img src="assets/images/client-3.png" alt="client"/>
                                </div>
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                                    <img src="assets/images/client-4.png" alt="client"/>
                                </div>
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                                    <img src="assets/images/client-5.png" alt="client"/>
                                </div>
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                    <img src="assets/images/client-6.png" alt="client"/>
                                </div>
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_top">
                                    <img src="assets/images/client-7.png" alt="client"/>
                                </div>
                                <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                                    <img src="assets/images/client-8.png" alt="client"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="pricing-area page-section scroll-to-page" id="pricing">
                <div className="custom-container">
                    <div className="pricing-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                <i className="las la-dollar-sign"></i> pricing
                            </h4>
                            <h1 className="scroll-animation" data-animation="fade_from_bottom">My <span>Pricing</span>
                            </h1>
                        </div>

                        <div className="pricing-table-items">
                            <div className="row">
                                <div className="col-md-6 scroll-animation" data-animation="fade_from_left">
                                    <div className="pricing-table">
                                        <div className="pricing-table-header">
                                            <div className="top d-flex justify-content-between align-items-start">
                                                <h4>basic</h4>
                                                <p className="text-right">Have design ready to build?<br/>
                                                    or small budget</p>
                                            </div>
                                            <h1>$59 <span>/ hour</span></h1>
                                        </div>
                                        <ul className="feature-lists">
                                            <li>Need your wireframe</li>
                                            <li>Design with Figma, Framer</li>
                                            <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                                            <li>Remote/Online</li>
                                            <li>Work in business days, no weekend.</li>
                                            <li>Support 6 months</li>
                                        </ul>
                                        <a href="#" className="theme-btn">pick this package</a>
                                    </div>
                                </div>
                                <div className="col-md-6 scroll-animation" data-animation="fade_from_right">
                                    <div className="pricing-table">
                                        <div className="pricing-table-header">
                                            <div className="top d-flex justify-content-between align-items-start">
                                                <h4>premium</h4>
                                                <p className="text-right">Not have any design?<br/>
                                                    Leave its for me</p>
                                            </div>
                                            <h1>$129 <span>/ hour</span></h1>
                                        </div>
                                        <ul className="feature-lists">
                                            <li>Don't need wireframe or anything</li>
                                            <li>Design with Figma, Framer from scratch</li>
                                            <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                                            <li>Remote/Online</li>
                                            <li>Work with both weekend</li>
                                            <li>Support 12 months</li>
                                            <li>Your project alway be priority</li>
                                            <li>Customer care gifts</li>
                                        </ul>
                                        <a href="#" className="theme-btn">pick this package</a>
                                    </div>
                                </div>
                            </div>
                            <p className="info scroll-animation" data-animation="fade_from_bottom">
                                Don't find any package match with your plan!<br/>
                                    Want to setup a new tailor-made package for only you?. <a href="#">Contact Us</a>
                            </p>
                        </div>

                    </div>
                </div>
            </section> */}


            <section className="contact-area page-section scroll-content" id="contact">
                <div className="custom-container">
                    <div className="contact-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                <i className="las la-dollar-sign"></i> contact
                            </h4>
                            <h1 className="scroll-animation" data-animation="fade_from_bottom">Let's Work
                                <span>Together!</span></h1>
                        </div>
                        {/* <h3 className="scroll-animation" data-animation="fade_from_bottom">hello@drake.design</h3> */}
                        <p id="required-msg">* Marked fields are required to fill.</p>

                        <form className="contact-form scroll-animation" data-animation="fade_from_bottom" onSubmit={formik.handleSubmit}>
                            <div className="alert alert-success messenger-box-contact__msg" style={{ display: "none" }}
                                role="alert">
                                Your message was sent successfully.
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label htmlFor="full-name">Full Name <sup>*</sup></label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            id="full-name"
                                            placeholder="Your Full Name"
                                            value={formik.values.fullName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.fullName && formik.errors.fullName ? (
                                            <div className="error">{formik.errors.fullName}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label htmlFor="email">Email <sup>*</sup></label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Your email address"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="error">{formik.errors.email}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label htmlFor="phone-number">Phone <sup>*</sup></label>
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            id="phone-number"
                                            placeholder="Your phone number"
                                            value={formik.values.phoneNumber}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                            <div className="error">{formik.errors.phoneNumber}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label htmlFor="budget">Your Budget <sup>*</sup></label>
                                        <input
                                            type="text"
                                            name="budget"
                                            id="budget"
                                            placeholder="A range budget for your project"
                                            value={formik.values.budget}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.budget && formik.errors.budget ? (
                                            <div className="error">{formik.errors.budget}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="input-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="Write your message here ..."
                                            value={formik.values.message}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        ></textarea>
                                        {formik.touched.message && formik.errors.message ? (
                                            <div className="error">{formik.errors.message}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="input-group upload-attachment">
                                        <div>
                                            <label htmlFor="upload-attachment">
                                                <i className="las la-cloud-upload-alt"></i> Add an attachment
                                                <input
                                                    type="file"
                                                    name="file"
                                                    id="upload-attachment"
                                                    onChange={(event) => {
                                                        formik.setFieldValue("file", event.currentTarget.files[0]);
                                                    }}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="input-group submit-btn-wrap">
                                        <button className="theme-btn" name="submit" type="submit" id="submit-form">Send
                                            Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </div>
    )
}
