import React from 'react'

import IngredientList from './IngredientList'
import RecipeTitle from './RecipeTitle'

export default function Recipe ({ recipeIndex, title, feedback, ingredients, onIngredientClick }) {
  return (
    <>
      <RecipeTitle title={title} feedback={feedback} />
      <IngredientList
        recipeKey={recipeIndex}
        ingredients={ingredients}
        onIngredientClick={onIngredientClick}
      />
    </>
  )
}
