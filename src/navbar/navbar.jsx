import React from 'react'
import "./navbar.css"

import logo from "../images/Logo.png"

const Navbar = () => {

  const [header, setHeader] = React.useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 70) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }


  window.addEventListener('scroll', changeNavbar)


  return (
    <nav className={
      header ? 'nav__section nav__section-active' : 'nav__section'
    }>
      <div className='nav__container'>
        <div className='nav__logo'>
          <img src={logo} alt="" />
        </div>

        <div className={
          header ? 'nav__components nav__components-active' : 'nav__components'
        }>
          <a href="#history"><p><i>01.HISTORY</i><hr /></p></a>
          <a href="#team"><p><i>02.TEAM</i><hr /></p></a>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
