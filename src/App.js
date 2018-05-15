import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Landing from './components/Landing'


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
        <div className="container"></div>
      </div>
    );
  }
}

export default App;
