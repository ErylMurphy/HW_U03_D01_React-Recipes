import React, { Component } from "react";

class Header extends Component {
  render() {
    return <div className="recipe-header">
    <header>
    <h1>{this.props.title}</h1>
    <cite className = "contributors">
    <p>By {this.props.name}</p>
    <div><a href ={this.props.source}>source</a></div>
    </cite>
    <ul id = "recipe_meta_data" class = "list-group">
      <li>Active: {this.props.activePrep}</li>
      <li>Total: {this.props.totalPrep}</li>
      <li>{this.props.servings} Servings</li>
      </ul>
      </header>
    </div>
  }
}

export default Header;
