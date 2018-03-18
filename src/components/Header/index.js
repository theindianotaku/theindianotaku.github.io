import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Grid, User, Mail, List } from 'react-feather';

import Logo from '../../assets/images/my-name.png';

const Header = () => (
  <nav id="header" className="header">
    <div className="header__left">
      <div className="header__logo-wrapper valign-wrapper center-text">
        <Link className="valign-wrapper" to="/">
          <img className="header__logo" src={Logo} alt="Debashish Nayak" />
        </Link>
      </div>
    </div>
    <div className="header__right hidden-on-mobile">
      <div className="valign-wrapper flex-end">
        <NavLink className="strike-through" activeClassName="active" to="/work">
          work
        </NavLink>
        <NavLink className="strike-through" activeClassName="active" to="/workflow">
          workflow
        </NavLink>
        <NavLink className="strike-through" activeClassName="active" to="/about">
          about
        </NavLink>
        <NavLink className="strike-through" activeClassName="active" to="/contact">
          contact
        </NavLink>
      </div>
    </div>
    <div className="header__right hidden-on-tablet">
      <div className="valign-wrapper flex-end">
        <NavLink className="strike-through" activeClassName="active" to="/work">
          <Grid className="float-right" size={20} />
        </NavLink>
        <NavLink className="strike-through" activeClassName="active" to="/workflow">
          <List className="float-right" size={20} />
        </NavLink>
        <NavLink className="strike-through" activeClassName="active" to="/about">
          <User className="float-right" size={20} />
        </NavLink>
        <NavLink className="strike-through" activeClassName="active" to="/contact">
          <Mail className="float-right" size={20} />
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Header;