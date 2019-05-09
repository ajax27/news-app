import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav style={{ backgroundColor: 'yellow', width: '100%', height: 100 }} className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img alt="" src="" />
            </a>
          </div>
          <h1 
            style={{ 
              textAlign: 'center',
              marginTop: 30,
              color: 'blue'
            }}
          >React News App</h1>
        </div>
      </nav>
    );
  }
}

export default Header;

