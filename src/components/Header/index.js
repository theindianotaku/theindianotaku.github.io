import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Grid, User, Mail, List, FileText } from 'react-feather';

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
        <NavLink className="strike-through standout-text" activeClassName="active" to="/" exact>
          home
        </NavLink>
        <NavLink className="strike-through standout-text" activeClassName="active" to="/work">
          work
        </NavLink>
        <NavLink className="strike-through standout-text" activeClassName="active" to="/about">
          about
        </NavLink>
        <NavLink className="strike-through standout-text" activeClassName="active" to="/contact">
          contact
        </NavLink>
        <a className="strike-through standout-text" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1FSRxWfKgX4ky7S3lR95XjHdvRWKgOdi_">
          resume
        </a>
      </div>
    </div>
    <div className="header__right hidden-above-mobile">
      <div className="valign-wrapper flex-end">
        <NavLink className="strike-through" activeClassName="active" to="/" exact>
          <List className="float-right" size={20} />
        </NavLink>
        <NavLink className="strike-through" activeClassName="active" to="/work">
          <Grid className="float-right" size={20} />
        </NavLink>
        <NavLink className="strike-through" activeClassName="active" to="/about">
          <User className="float-right" size={20} />
        </NavLink>
        <NavLink className="strike-through" activeClassName="active" to="/contact">
          <Mail className="float-right" size={20} />
        </NavLink>
        <a className="strike-through" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1FSRxWfKgX4ky7S3lR95XjHdvRWKgOdi_">
          <FileText className="float-right" size={20} />
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
