import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
import { useState, useContext } from 'react';
import { AppContext } from '@/pages';

const Responses = () => {

  const { setResponse,  } = useContext(AppContext)
  
  return (
    <div className='sidebar_icon flex-col'>
      <label className="swap ">
  
    <input type="checkbox" 
    onChange={(e) => {
      setResponse(e.target.checked)
      console.log(e.target.checked)
    }}
    />
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
