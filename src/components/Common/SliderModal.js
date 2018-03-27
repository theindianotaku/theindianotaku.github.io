import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Grid } from 'react-feather';

import Logo from '../../assets/images/my-name.png';

Modal.setAppElement('#root');

const SliderModal = (props) => {
  const style = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      zIndex: 1000
    },
    content: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      border: 'none',
      background: '#101015',
      overflow: 'hidden',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
      padding: '0px'
    }
  };
  return (
    <Modal
      {...props} 
      className="modal-overlay" 
      id="feature-modal" 
      style={style}
    >
      <div className="shell">
        <nav className="header">
          <div className="header__left">
            <div className="header__logo-wrapper valign-wrapper center-text">
              <Link className="valign-wrapper" to="/">
                <img className="header__logo" src={Logo} alt="Debashish Nayak" />
              </Link>
            </div>
          </div>
          <div className="header__right">
            <div className="valign-wrapper flex-end">
              <a onClick={props.onRequestClose} className="strike-through">
                <Grid className="float-right" size={20} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </Modal>
  );
};

export default SliderModal;