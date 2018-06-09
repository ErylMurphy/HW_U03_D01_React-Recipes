import React, { Component } from 'react';
import './style.css';

import recipes from '../data/recipes';
import Header from '../Header';
import Prep from '../Prep';
import Footer from '../Footer';
import NavBar from '../NavBar';

const recipe = recipes[0];

class App extends Component {
  render() {
    return (
      <div className="flex-container">
      <div className = "nav">
      <NavBar />
      </div>

            <Header
              title={recipe.title}
              name={recipe.byline.name}
              source={recipe.byline.source} 
            activePrep={recipe.activePrep}
            totalPrep={recipe.totalPrep}
          servings={recipe.servings}  />
        
        <div className = "prep">
           <Prep
            img={recipe.img}
          ingredients = {recipe.ingredients}
           preparation = {recipe.preparation}
           />
        </div>
        <div>
       <Footer />
      </div>
      </div>
    );
  }
}

export default App;
