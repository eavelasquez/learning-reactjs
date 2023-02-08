import React from 'react'

import { recipes } from './utils/recipes.js'
import RecipeTitle from './components/RecipeTitle'

function App () {
  return (
    <article>
      <h1>Recipe Manager</h1>

      {
        recipes.map(({ title, feedback }, index) => (
          <RecipeTitle key={index} title={title} feedback={feedback} />
        ))
      }
    </article>
  )
}

export default App
