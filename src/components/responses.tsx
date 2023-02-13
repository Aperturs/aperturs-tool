import React from 'react'
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'

const Responses = () => {
  return (
    <div className='sidebar_icon flex-col'>
      <label className="swap ">
  
    <input type="checkbox" />
    <AiFillHeart className="swap-on fill-current w-6 h-6 text-slate-500" />  
    <AiOutlineHeart className="swap-off fill-current w-6 h-6 text-slate-500" />
    </label>
    <p className='icon_text'>
          Response
    </p>
    </div>
  )
}

export default Responses
