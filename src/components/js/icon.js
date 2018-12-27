import React from "react";
import '../css/home.css';
import logo from '../img/childIcon.png';

class Navbar extends React.Component {
    render() {
      return (
        <div>
          <div className="logo">
            <img src={logo} alt="logo" className="playchild"/>
            <hr />
            <h1>Missing Child</h1>
          </div>
        </div>
      );
    }
  }

export default Navbar;