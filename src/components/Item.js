import React from 'react'

export default function Item({item }) {
    const {name , amount} = item
  return (
      <div className='recipe__items'>
        <span className='recipe__items__value'>{name}</span>
        <span className='recipe__items__value'>{amount}</span>
      </div>
  )
}
