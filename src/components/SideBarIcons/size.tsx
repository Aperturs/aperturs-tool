import React from 'react'
import {BsFileFontFill,BsFileFont} from 'react-icons/bs'
import { useState } from 'react';



function setFont(isFont: boolean): string {
  if (isFont) {
    console.log('large')
    return "text-xl";
  } else {
    console.log('small')
    return "text-lg";
  }
}


const Size = () => {

  const [size, setSize] = useState('')

  return (
    <div className='sidebar_icon flex-col'>
      <label className="swap">
  
    <input type="checkbox" 
    
    onChange={(e) => {
      setSize(setFont(e.target.checked))
    }}
    />
    <BsFileFontFill className="swap-on fill-current w-6 h-6 text-slate-500" />  
    <BsFileFont className="swap-off fill-current w-6 h-6 text-slate-500" />
    </label>
    <p className='icon_text mt-1 '>
          Font
    </p>
    </div>
  )
}

export default Size
