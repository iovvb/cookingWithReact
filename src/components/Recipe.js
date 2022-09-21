import React from 'react'
import Item from './Item'

export default function Recipe({recipe , setRecipes , recipes , setEditId}) {
    const {name  , id , cookTime , servings  ,instructions , items } = recipe

    function handleEdit(id){
        console.log(recipe)
        setEditId(recipe)
    }

    function handleDelete(id){
        let raw_newRecipes = [...recipes]
        let newRecipes = raw_newRecipes.filter((e)=>{
            if(e.id !== id){
                return e
            }
            else{
                console.log("Hi")
            }
        })

        setRecipes(newRecipes)
    }
    return (
        <div className='pad-20'>
        <div className='recipe__wrapper'>
            <div className='recipe__wrapper__head'>
                <div className='recipe__row'>
                    <span className='recipe__value name'>{name}</span>
                </div>
                <div className='recipe__wrapper_buttons'>
                    <button className='btn btn--primary mr-10' onClick={()=>{handleEdit(id)}}>Edit</button>
                    <button className='btn btn--danger' onClick={()=>{handleDelete(id)}}>Delete</button>
                   </div>
         </div>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'>Cook Time :</span>
                <span className='recipe__value'>{cookTime}</span>
            <div className='recipe__row'>
                <span className='recipe__label'>Servings :</span>
                <span className='recipe__value'>{servings}</span>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'>Instructions :</span>
                <div className='recipe__value recipe__instructions intended'>{instructions}</div>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'>Items :</span>
                <div className='recipe__value recipe__items intended'>
                    {items.map((item)=>{
                        return <Item key={item.id} item={item}></Item>
                    })}
                </div>
            </div>
        </div>
        </div>
    )
}
