import React, { Component } from "react";

class Prep extends Component {
  render() {
    return <div className="prep">
      <ul>{this.props.ingredients}</ul>
      <h1>{this.props.preparation}</h1>
      <h2>{this.props.activePrep}</h2>
      <p>{this.props.totalPrep}</p>
      <p>{this.props.servings}</p>
      <img src={this.props.img} />
    </div>
  }
}

export default Prep;
