import React, { useState } from 'react'

export const TodoItem = ({todo, onDelete}) => {
    const [mark,setmark]=useState(".")
    return (
        <>
        <div>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
           <input type='checkbox' style={{marginLeft:"10px",width:'40px'}}/>
        </div>
        <hr/> 
        </>
    )
}