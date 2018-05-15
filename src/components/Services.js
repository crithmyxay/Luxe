import React from 'react';

const Services = props => {
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
}

export default Services