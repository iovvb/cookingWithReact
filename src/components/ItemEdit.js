import React from 'react'
import { v4 as uuidv4 } from 'uuid';


export default function ItemEdit({item}) {
    const {name , amount} = item
  return (
    <div>
        <input key={uuidv4()} className='recipe__edit__input' type="text" value={name}></input>
        <input key={uuidv4()} className='recipe__edit__input' type="text" value={amount}></input>
    </div>
  )
}
