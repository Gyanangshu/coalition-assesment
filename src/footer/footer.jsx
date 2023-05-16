import React from 'react'
import "./footer.css"
import logo from "../images/Logo.png"

const footer = () => {
    return (
        <footer className='footer__section'>
            <div className="footer__content">
                <div className="logo__brand">
                    <img className='footer__logo' src={logo}/>
                    <div className="brand">
                        <p className='brand__name'>LOSANGELES</p>
                        <p className='brand__name'>MOUNTAINS</p>
                    </div>
                </div>
                <p className='copyright'><i>COPYRIGHT 2016. ALL RIGHTS RESERVED</i></p>
            </div>
        </footer>
    )
}

export default footer
