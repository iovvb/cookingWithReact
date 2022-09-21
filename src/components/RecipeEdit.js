import React from 'react'
import { recipes } from '../data/recipes_data'
import ItemEdit from './ItemEdit'
import { v4 as uuidv4 } from 'uuid';


export default function RecipeEdit({storedRecipes,setRecipes , setEditId , editId}) {
    const {id , name,cookTime,servings,instructions,items} = editId

    function handleChange(change){
        let newRecipes = [...storedRecipes]
        let index = newRecipes.findIndex(e => e.id === id)
        let editedRecipe = {...editId , ...change}
        newRecipes[index] = editedRecipe
        setRecipes([...newRecipes])
        setEditId(newRecipes[index])
    }
  return (
    <div className='recipe__edit__form__div'>
        <div className='recipe__edit__close__button__div'>
            <button className='btn recipe__edit__close__btn' onClick={(e)=>{setEditId(undefined)}}>&times;</button>
        </div>
        <div className='recipe__edit__main__form'>
            <div className='recipe__edit__row'>
                <label className='recipe__edit__label' htmlFor="name">Name</label>
                <input className='recipe__edit__input' onChange={(e)=>{handleChange({name:e.target.value})}} value={name} id='name' type="text"></input>
            </div>
            <div className='recipe__edit__row'>
                <label className='recipe__edit__label' htmlFor="cookTime">Cook Time</label>
                <input className='recipe__edit__input' onChange={(e)=>{handleChange({cookTime:e.target.value})}} value={cookTime} id='cookTime' type="text"></input>
            </div>
            <div className='recipe__edit__row'>
                <label className='recipe__edit__label' htmlFor="servings">Servings</label>
                <input className='recipe__edit__input' onChange={(e)=>{handleChange({servings:e.target.value})}} value={servings} id='servings' type="text"></input>
            </div>
            <div className='recipe__edit__row'>
                <label className='recipe__edit__label' htmlFor="instructions">Instructions</label>
                <textarea className='recipe__edit__input' onChange={(e)=>{handleChange({instructions:e.target.value})}} value={instructions} id='instructions' type="text"></textarea>
            </div>
            <div className='recipe__edit__row'>
                <label className='recipe__edit__label' htmlFor="items">Items</label>
                {items.map((item)=>{
                    return <ItemEdit key={uuidv4()} item={item}></ItemEdit>
                })}
            </div>
            <div className='add__recipe__button__div'>
                <button className='btn btn--primary' id='success' onClick={()=>{
                    setEditId(undefined)
                }}>Save Recipe</button>
            </div>
        </div>
    </div>
  )
}
