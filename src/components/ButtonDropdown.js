import React from 'react';
import NavItem from './NavItem'

const ButtonDropdown = props => {
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
      <div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 
          onClick={(e)=>{props.showDropdown(e)}} >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div style={{right: 0, position: 'fixed'}}>
          <div className={classDropdownMenu} aria-labelledby="navbarDropdown" style={{textAlign: 'right', position:'relative'}}>
            <a className="dropdown-item" href="/"><NavItem path="/" name="Home"/></a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/"><NavItem path="/gallery" name="Gallery"/></a>
            <a className="dropdown-item" href="/">Something else here</a>
          </div>
        </div>
      </div>
    )
  // }
}

export default ButtonDropdown