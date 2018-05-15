import React from 'react';

const NavDropdown = props => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isToggleOn: false
  //   };
  // }

  // showDropdown(e) {
  //   e.preventDefault();
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }));
  // }

  // render() {
    const classDropdownMenu='dropdown-menu' + (props.isToggleOn ? ' show' : '')
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"
          onClick={(e) => {props.showDropdown(e)}}>
          {props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {props.children}
        </div>
      </li>
    )
  // }
}

export default NavDropdown