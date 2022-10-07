import React from 'react'
import { NavLink } from 'react-router-dom';
import logo2 from "../images/logo2.JPG";

function NavBar() {

    const aproposFunction = () => {
        return window.scrollTo({ top: 600, behavior: 'smooth' })
    }

    const contactFunction = () => {
        return window.scrollTo({ top: 3200, behavior: 'smooth' });
    }

    const homeF = () => {
        return window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const image = { width: '70px', borderRadius:"10%", marginRight: "10px" }

    return (
        <>
            <div className="scroll-up-btn">
                <i className="fa fa-angle-up"></i>
            </div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo">
                        <NavLink to="/" style={{ color: "#777" }}>
                            <img src={logo2} style={image} alt='logo' />
                            <span>MUNIE GROUP</span>
                        </NavLink>
                    </div>
                    <ul className="menu">
                        <li className="menu-btn links" onClick={homeF}>
                            <span>Accueil</span>
                        </li>
                        <li className="menu-btn links" onClick={aproposFunction}>
                            <span>Nos services</span>
                        </li>
                        <li className="menu-btn links" onClick={contactFunction}>
                            <span>Contacts</span>
                        </li>
                    </ul>
                    <div className="menu-btn">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavBar