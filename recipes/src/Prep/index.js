import React, { Component } from "react";

class Prep extends Component {
  render() {
    return <article className="article">
      <img id = "food_image" src={this.props.img} />
      <h1>Ingredients</h1>
      <ul>
        {this.props.ingredients.map(ingredient => {
          return <li>{ingredient}</li>;
        })}
      </ul>
      <h1>Preparation</h1>
      <p>{this.props.preparation}</p>

    </article>
  }
}

export default Prep;
