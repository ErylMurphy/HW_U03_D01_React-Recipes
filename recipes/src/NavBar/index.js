import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return <div className="nav-bar">
      <button class="btn btn-default">Previous Recipe</button>
      <button class="btn btn-default">Next Recipe</button>
    </div>
  }
}


export default NavBar;