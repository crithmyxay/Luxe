import React from 'react';
import NavItem from './NavItem'

const ButtonDropdown = props => {
  const classDropdownMenu='dropdown-menu' + (props.isToggleOn ? ' show disappear' : '')
  return (
    <div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 
        onClick={(e)=>{props.showDropdown(e)}} >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div style={{right: 0, position: 'fixed'}}>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown" style={{textAlign: 'right', position:'relative'}}>
          <NavItem className="dropdown-item" path="/" name="Home"/>
          <div className="dropdown-divider"></div>
          <NavItem className="dropdown-item" path="/gallery" name="Gallery"/>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </div>
    </div>
  )
}

export default ButtonDropdown