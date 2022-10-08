import React from 'react'
import About from './About'
import Contact from './Contact'
import Main from './Main'
import NavBar from './NavBar';
import $ from "jquery"
import Footer from './Footer';
import Security from '../sous-components/Security';
import Visionnaire from '../sous-components/Visionnaire';

function Home() {
    $('.scroll-up-btn').click(function () {
        return window.scrollTo({ top: 0, behavior: 'smooth' })
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    return (
        <>
            <NavBar />
            <Main />
            <About />
            <Security />
            <Visionnaire />
            <Contact />
            <Footer />
        </>
    )
}

export default Home