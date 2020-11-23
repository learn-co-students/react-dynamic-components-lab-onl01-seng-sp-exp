import React, { Component } from 'react';

export default class ColorBox extends Component {
  render() {
    const newOpacity = this.props.opacity - .1
    return this.props.opacity  <= .2 ? null : (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        <ColorBox opacity={newOpacity} />
      </div>
    )
  }
}



