import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {

  render() {
    return (
      <div className="NavBar">
        <div className="link-container">
          <Link to="/home" className="link">Home</Link>
        </div>
        <div className="link-container">
          <Link to="/page1" className="link">Unidad 1</Link>
        </div>
        <div className="link-container">
          <Link to="/page2" className="link">Unidad 2</Link>
        </div>
        <div className="link-container">
          <Link to="/page3" className="link">Unidad 3</Link>
        </div>
        <div className="link-container">
          <Link to="/page4" className="link">Unidad 4</Link>
        </div>
      </div>
    );
  }

}

export default NavBar;
