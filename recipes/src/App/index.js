import React, { Component } from 'react';
import './style.css';

import recipes from '../data/recipes';
import Header from '../Header';
import Prep from '../Prep';
import Footer from '../Footer';


const recipe = recipes[0];

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="recipe-header">
            <Header
              title={recipe.title}
              name={recipe.byline.name}
              source={recipe.byline.source} />
        </div>

        <div className = "prep">
           <Prep
          ingredients = {recipe.ingredients}
          preparation = {recipe.preparation}
          activePrep = {recipe.activePrep}
          totalPrep = {recipe.totalPrep}
          servings = {recipe.servings}
          img = {recipe.img} />
        </div>
       <Footer />
      </div>
    );
  }
}

export default App;
