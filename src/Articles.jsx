import React from 'react'

function Articles({articles, deleteBut}) {
  return (
    <ul className='flex flex-col mx-auto gap-5'>
       { articles.map((aricle)=>{
        const {title, author, date, id} = aricle
        return <li className='mx-auto text-slate-800 text-3xl' key={id}>
            <h1>Form on React</h1>
            <p>{title}</p>
            <p>{author}</p>
            <p>{date}</p>
            <button className='flex mx-auto mt-4 px-4 py-2 text-white bg-red-600 rounded w-fit text-xl' onClick={()=>deleteBut(id)}>Delete</button>
        </li>
       })}
    </ul>
  )
}

export default Articles