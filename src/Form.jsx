import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4 } from 'uuid'
function 
Form({addArticles}) {
  const [title, setTitle] = useState('') 
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit= (e)=>{
    e.preventDefault()
    addArticles({
       id: uuidv4(), title, author, date
    })


  }
  return (
   
      <form class="bg-blue-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-fit mx-auto" onSubmit={handleSubmit} >
        <div className='flex flex-col  align-items-center justify-content-center  gap-5 '>
        <div className='flex justify-between'>
       <label className='px-5 text-2xl ' htmlFor="title">Name</label>
        <input className='border bg-blue-100  placeholder-slate-700 placeholder-glow  text-slate-950 rounded' onChange={(e)=>setTitle(e.target.value)} type="text" id="title" placeholder='aricle title' />
       </div>
       <div className='flex justify-between'>
       <label className='px-5 text-2xl ' htmlFor="author">Author</label>
        <input  className='border placeholder-slate-700 bg-blue-200 text-slate-950 rounded' onChange={(e)=>setAuthor(e.target.value)} type="text" id="author" placeholder='aricle author' />
       </div>
       <div className='flex justify-between'>
       <label className=' px-5 text-2xl ' htmlFor="date">Date</label>
        <input  className='border bg-blue-200 text-slate-950 rounded' onChange={(e)=>setDate(e.target.value)} type="date" id="date" placeholder='aricle date' />
       </div>
       <button className='mx-auto mt-4 px-4 py-2 text-white bg-green-600 rounded w-fit text-xl' type='submit'>submit</button>
        </div>
      </form>
    
  )
}

export default Form