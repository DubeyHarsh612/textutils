import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const toggleMode = () => {
    if (props.mode === 'light') {
      props.setMode('dark');
      document.body.style.backgroundColor = '#2f2f58';
      document.title = 'TextUtils - Dark Mode';
      props.showAlert('success', 'Dark mode is enabled');
    } else {
      props.setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';
      props.showAlert('success', 'Light mode is enabled');
    }
  };

  const greenMode = () => {
    if (props.mode === 'light') {
      props.setMode('info');
      document.body.style.backgroundColor = 'green';
      props.showAlert('success', 'Green mode is enabled');
    } else {
      props.setMode('light');
      document.body.style.backgroundColor = 'white';
      props.showAlert('success', 'Light mode is enabled');
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              onClick={toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              aria-checked={props.mode === 'dark' ? 'true' : 'false'}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input
              className="form-check-input"
              onClick={greenMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckGreen"
              aria-checked={props.mode === 'info' ? 'true' : 'false'}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckGreen">
              Enable Green Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
};
