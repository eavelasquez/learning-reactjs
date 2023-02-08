import React from 'react'

import '../styles/IngredientList.css'

export default function IngredientList({ ingredients }) {
  const ingredientListItems = ingredients.map((ingredient, index) => {
    const className = ingredient.prepared ? 'prepared' : ''

    return (
      <li key={index} className={className}>
        {ingredient.name}
      </li>
    )
  })

  return <ul>{ingredientListItems}</ul>
}
