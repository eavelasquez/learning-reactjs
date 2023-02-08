import React from 'react'

import '../styles/RecipeTitle.css'

export default function RecipeTitle({ title, feedback: { rating, reviews } }) {
  const className = rating <= 3.5 ? 'text-danger' : 'text-success'

  return (
    <section>
      <h2>{title}</h2>
      <h3 className={className}>
        {rating} from {reviews} reviews
      </h3>
    </section>
  )
}
