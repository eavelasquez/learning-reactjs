import React from 'react'

import { recipes } from './utils/recipes.js'
import RecipeTitle from './components/RecipeTitle'
import IngredientList from './components/IngredientList'

function App () {
  return (
    <article>
      <h1>Recipe Manager</h1>

      {
        recipes.map(({ title, feedback, ingredients }, index) => (
          <React.Fragment key={index}>
            <RecipeTitle title={title} feedback={feedback} />
            <IngredientList ingredients={ingredients} />
          </React.Fragment>
        ))
      }
    </article>
  )
}

export default App
