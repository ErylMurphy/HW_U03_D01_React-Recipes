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
          {recipes.map((recipe) => {
            return <Header
              title={recipe.title}
              name={recipe.byline.name}
              source={recipe.byline.source} />
          })}
        </div>

        <div className = "prep">
        {recipes.map((recipe) => {
          return <Prep
          ingredients = {recipe.ingredients}
          preparation = {recipe.preparation}
          activePrep = {recipe.activePrep}
          totalPrep = {recipe.totalPrep}
          servings = {recipe.servings}
          img = {recipe.img} />
        })}
        </div>
        return <Footer />
      </div>
    );
  }
}

export default App;
