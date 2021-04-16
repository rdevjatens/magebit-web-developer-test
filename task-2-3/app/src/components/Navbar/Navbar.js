import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li className="logo">
            <span className="icon-ic-pineapple"></span>
            <span className="logo-text">pineapple</span>
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">How it works</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
