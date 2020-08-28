import React from 'react';
import logo from '../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        
        <div className="header container">
            <nav>
            <a href="#"><img src={logo} /></a>
            <div>
            <a className="dropdown dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                Programs
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
          <a className="dropdown-toggle menu" href="#" role="button" data-toggle="dropdown" >Careers</a>
          <a className="dropdown-toggle menu" href="#" role="button" data-toggle="dropdown" >For Enterprise</a>

        <span className="menu">|</span>

          <button className="btn btn-light menu">Sign In</button>
          <button className="btn btn-info menu">Get Started</button>
            </div>
        </nav>
            
      </div>
       
    );
};

export default Header;