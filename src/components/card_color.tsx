import React from 'react'
import { useState } from 'react';
import {BsSunFill, BsMoonFill} from 'react-icons/bs'


const CardColor = () => {
    const [color, setColor] = useState("light")

    return (
      <div className='w-20 h-20 rounded-full
      relative
       bg-slate-50  dark:bg-slate-900
       shadow-lg
       dark:shadow-xl
          hover:rounded-xl
          transition-all
          ease-in-out duration-100
          mx-2
          '
          onClick={() => {setColor(
                color === "light" ? "dark" : "light"
          )}}

      >
        <div className='flex flex-col items-center justify-center w-full h-full'>

        <label className="swap swap-rotate  ">

<input type="checkbox" />

<BsSunFill className="swap-on fill-current w-6 h-6 text-slate-500" />
<BsMoonFill className="swap-off fill-current w-6 h-6 text-slate-500" />
</label>
<p className='text-gray-500 text-[10px] pt-1 mt-1 font-bold '>
    Card
    </p>
           
        </div>
         
  
  
      </div>
    );
}

export default CardColor
