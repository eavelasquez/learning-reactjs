import React, { useEffect, useState } from 'react'

import IngredientList from './IngredientList'
import RecipeTitle from './RecipeTitle'

export default function Recipe ({ recipeIndex, title, feedback, ingredients, onIngredientClick }) {
  const [prepared, setPrepared] = useState(false)
  const isPreparedText = prepared ? 'Prep work is done!' : 'Just keep chopping'

  const isPrepared = () => {
    setPrepared(ingredients.every(ingredient => ingredient.prepared))
  }

  useEffect(isPrepared, [ingredients])

  return (
    <>
      <RecipeTitle title={title} feedback={feedback} />
      <IngredientList
        recipeKey={recipeIndex}
        ingredients={ingredients}
        onIngredientClick={onIngredientClick}
      />
      <p>{isPreparedText}</p>
    </>
  )
}
