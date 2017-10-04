import React, { Component } from 'react';

class Fonts extends Component {

  render() {
    return (

      <a href={`https://fonts.google.com/specimen/${this.props.name}`} target="blank"><div className="fonts">
      <div className="font-name">
        <link href={`https://fonts.googleapis.com/css?family=${this.props.name}`} rel="stylesheet"/>
      </div>
        <h4 style={{fontFamily: `${this.props.name}`}}>{this.props.name}</h4>
        <p>category: {this.props.category}</p>
      </div></a>
    )
  }
}

export default Fonts;
