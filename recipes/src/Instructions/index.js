import React, { Component } from "react";

class Instructions extends Component {
  render() {
    return <div className="instructions">
      <h1>{this.props.preparation}</h1>
      <h2>{this.props.activePrep}</h2>
      <p>{this.props.totalPrep}</p>
      <p>{this.props.servings}</p>
      <img src= {this.props.img} />
    </div>
  }
}

export default Instructions;
