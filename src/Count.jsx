import React, { useState } from 'react'

const Count = () => {
  const [show,setShow]=useState(true)
  const handleChange=()=>{
setShow(!show)
  }
  return(
  <div className='text-center'>
  <button className='border border-black p-2 bg-purple-600 rounded font-bold text-white' onClick={handleChange}>{show?"hide":"show"}</button>
  {show && <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque incidunt fuga labore eum cupiditate eveniet doloribus, nemo tempora alias quibusdam ipsum sapiente est fugit esse. Dolore voluptatibus ab quod!</div>}
  </div>
)}

export default Count
