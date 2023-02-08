import React from 'react'

import '../styles/IngredientList.css'

export default function IngredientList ({ recipeKey, ingredients, onIngredientClick }) {
  const ingredientListItems = ingredients.map((ingredient, index) => {
    const className = ingredient.prepared ? 'prepared' : ''

    const handleClick = () => onIngredientClick(recipeKey, index)

    return (
      <li key={index} className={className} onClick={handleClick}>
        {ingredient.name}
      </li>
    )
  })

  return (
    <ul className='ingredient-list'>
      {ingredientListItems}
    </ul>
  )
}
