import React from 'react';
// import NavDropdown from './NavDropdown';
import ButtonDropdown from './ButtonDropdown'
import NavItem from './NavItem'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/"><img src="/images/logo.png" alt="logo" style={{height: '50px'}}/></a>
          <ButtonDropdown showDropdown={this.props.showDropdown} isToggleOn={this.props.isToggleOn}/>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 
            onClick={(e)=>{this.props.showDropdown(e)}} >
            <span className="navbar-toggler-icon"></span>
          </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItem path="/" name="Home" />
            <NavItem path="/gallery" name="Gallery" />
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
    )
  }
}

export default Navigation;