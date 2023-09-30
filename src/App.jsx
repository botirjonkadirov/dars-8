import React from 'react'
import { useState } from 'react'
import Form from './Form'
import Articles from './Articles'
import { useEffect } from 'react'
const getItemoflocal = ()=>{
  return JSON.parse(localStorage.getItem('articles')) || []
}
console.log(JSON.parse(localStorage.getItem('articles')))
function App() {
const[articles, setArticles] = useState(getItemoflocal())
const addArticles = (article)=>{
  setArticles((p)=>{
   return [...p, article]
  })
  
}
useEffect(()=>{
  localStorage.setItem('articles', JSON.stringify(articles))
},[articles])


const deleteBut = (id)=>{
  setArticles((prev)=>{
    return prev.filter((e)=>{
      return e.id!==id
    })
  })
  
}

if(articles.length===0){
  localStorage.clear()
}

console.log(articles)
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex mx-auto text-2xl'><h1>Add new articles</h1></div>
      <Form addArticles={addArticles}/>
      <Articles articles={articles} deleteBut={deleteBut}/>
    </div>
  )
}

export default App