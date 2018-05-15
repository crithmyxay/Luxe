import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }

  render() {
    return (
      <div className="jumbotron text-center" style={{background: 'none'}}>
        <h1 className="display-4">WELCOME</h1>
        <p className="lead">Prepare to Relax & Pamper Yourself</p>
      </div>
    )
  }
}

export default Landing