import React, { Component } from "react";

class Header extends Component {
  render() {
    return <div className="recipe-header">
    <h1>{this.props.title}</h1>
    <h2>{this.props.name}</h2>
    <a>{this.props.source}</a>
    </div>
  }
}

export default Header;
