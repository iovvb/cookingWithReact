import React, { useEffect } from 'react'
import RecipeList from './RecipeList'
import RecipeEdit from './RecipeEdit'
import { recipesImported } from '../data/recipes_data'
import { useState} from 'react'
import "../css/app.css"

export default function App() {
  const [search,setSearch] = useState("")
  const [editId , setEditId] = useState(undefined)
  const [storedRecipesraw,setRecipes] = useState(recipesImported)
  const LOCAL_STORAGE_KEY = "Cooking.With.React"

  let storedRecipes = storedRecipesraw

  useEffect(()=>{
    let parsed = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setRecipes(parsed)
    storedRecipes = parsed
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify([...storedRecipes]))
  },[storedRecipes])

  return (
    <div className='container'>
      <div className='details'>
         <RecipeList search={search} setRecipes={setRecipes} recipes={storedRecipes} setEditId={setEditId} setSearch={setSearch}></RecipeList>
      </div>
      <div className='edit'>
      {editId && <RecipeEdit storedRecipes={storedRecipes} setRecipes={setRecipes}  editId={editId} recipes={storedRecipes} setEditId={setEditId}></RecipeEdit>}
      </div>
    </div>
  )
}
