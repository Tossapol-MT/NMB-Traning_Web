import React, { Component } from 'react'

export default class header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-white navbar-light">
    {/* <nav className='main-header navbar navbar-expand navbar-white navbar-light'></nav> */}
        <ul className="navbar-nav">
            <li className='nav-item d-none d-sm-inline-block'>
                <a href='/input' className='nav-link'>
                    New EMP
                </a>
            </li>
            <li className='nav-item d-none d-sm-inline-block'>
                <a href='/report' className='nav-link'>
                    Report
                </a>
            </li>
            <li className='nav-item d-none d-sm-inline-block'>
                <a href='/update' className='nav-link'>
                    Update
                </a>
            </li>
        </ul>
      </nav>
    
    );
  }
}
