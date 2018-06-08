import React, { Component } from "react";

class Prep extends Component {
  render() {
    return <div className="prep">
    <ul>
      {this.props.ingredients.map(ingredient => {
        return <li>{ingredient}</li>;
      })} </ul>
      <p>{this.props.preparation}</p>
      <p>{this.props.activePrep}</p>
      <p>{this.props.totalPrep}</p>
      <p>{this.props.servings}</p>
      <img src={this.props.img} />
    </div>
  }
}

export default Prep;
