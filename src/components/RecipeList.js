import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Recipe from './Recipe'

let addRecipe = {
    id:uuidv4(),
    name:"",
    servings:"",
    cookTime:"",
    instructions : "",
    items:[{
        id:uuidv4()
    }]
}


export default function RecipeList({recipes , setRecipes , search , setEditId , setSearch}) {
  return (
      <div className='recipe__details__div'>
      <div className='search_input_div'>
          <input className='search_input' type="text" placeholder='Search' onChange={(e)=>{setSearch(e.target.value)}}></input>
      </div>
      {
          recipes.filter((val)=>{
              if(search === ""){
                  return val
              }
              else if(val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                  return val
              }
          }).map((recipe,key)=>{
              return <Recipe setRecipes={setRecipes} recipes={recipes} setEditId={setEditId} key={uuidv4()}  recipe={recipe}></Recipe>
          })
      }
      <div className='add__recipe__button__div'>
          <button className='btn btn--primary' onClick={()=>{
              console.log("Clicked")
              setEditId(addRecipe)
              recipes.push(addRecipe)
          }}>Add Recipe</button>
      </div>
      </div>
  )
}
