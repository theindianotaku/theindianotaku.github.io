import React from 'react';

import Logo from '../../assets/images/my-name.png';

const Header = () => (
  <nav id="header" className="header">
    <div className="container m-a">
      <div className="nav-left">
        <div className="logo-wrapper valign-wrapper center-align">
          <a href="#main" className="valign-wrapper">
            <img className="logo" src={Logo} alt="Debashish Nayak" />
          </a>
        </div>
      </div>
      <div className="nav-right hidden-on-mobile">
        <div className="valign-wrapper">
          <a className="strike-through" href="#work">projects</a>
          <a className="strike-through" href="#principles">workflow</a>
          <a className="strike-through" href="#myself">about</a>
          <a className="strike-through" href="#contact">contact</a>
        </div>
      </div>
      <div className="nav-right hidden-on-large">
        <div className="valign-wrapper">
          <a className="strike-through" href="#work"><i className="material-icons float-right">dashboard</i></a>
          <a className="strike-through" href="#principles"><i className="material-icons float-right">bubble_chart</i></a>
          <a className="strike-through" href="#myself"><i className="material-icons float-right">face</i></a>
          <a className="strike-through" href="#contact">contact</a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;