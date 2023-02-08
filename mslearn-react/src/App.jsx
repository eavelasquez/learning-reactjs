import React, { useState } from 'react'

import { initialRecipes } from './utils/initialRecipes'
import Recipe from './components/Recipe'

export default function App () {
  const [recipes, setRecipes] = useState(initialRecipes)

  const handleIngredientClick = (recipeIndex, ingredientIndex) => {
    const newRecipes = [...recipes]
    const newIngredients = [...newRecipes[recipeIndex].ingredients]

    newIngredients[ingredientIndex].prepared = !newIngredients[ingredientIndex].prepared
    newRecipes[recipeIndex].ingredients = newIngredients

    setRecipes(newRecipes)
  }

  return (
    <article>
      <h1>Recipe Manager</h1>
      {
        recipes.map(({ title, feedback, ingredients }, index) => (
          <Recipe
            key={index}
            recipeIndex={index}
            title={title}
            feedback={feedback}
            ingredients={ingredients}
            onIngredientClick={handleIngredientClick}
          />
        ))
      }
    </article>
  )
}
