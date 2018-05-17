import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Landing from './components/Landing'
import Prices from './components/Prices';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.showDropdown = this.showDropdown.bind(this);
  }

  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <div className='bg'></div>
        <Navigation showDropdown={this.showDropdown} isToggleOn={this.state.isToggleOn}/>
        <Landing />
        <div className="container container-fluid text-center center">
          <div className="col-md-4"><Prices /></div>
        </div>
        <div className="container container-fluid text-center center">
          <div className="col-md-4"><Prices /></div>
        </div>
        <div className="container container-fluid text-center center">
          <div className="col-lg-12" style={{height: '1000px'}}></div>
        </div>
        <div className="container container-fluid text-center center">
          <div className="col-md-4"><Prices /></div>
        </div>
        <div className="container container-fluid text-center center">
          <div className="col-md-4"><Prices /></div>
        </div>
      </div>
    );
  }
}

export default App;
