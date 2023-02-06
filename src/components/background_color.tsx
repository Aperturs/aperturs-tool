import React from 'react'
import { useState } from 'react';


const BackgroundColor = () => {
    const [open, setOpen] = useState(false)

    return (
      <div className='w-20 h-20 rounded-full
      relative
       bg-slate-50
       dark:bg-slate-900
        shadow-lg
        dark:shadow-xl
          hover:rounded-xl
          transition-all
          ease-in-out duration-100
          mx-2
          '
      onMouseEnter={() => {setOpen(true)}}
      onMouseLeave={() => {setOpen(false)}}
      onTouchStart={() => {setOpen(true)}}
      onTouchEnd={() => {setOpen(false)}}
      >
          <div className='flex flex-col items-center justify-center w-full h-full'>
              <div className='text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-8 h-8 border-2 border-gray-300 text-slate-500' >
              </div>
              <p className='text-gray-500 text-[10px] pt-1 font-bold '>
                  Color
              </p>
          </div>
          {open && <div />}
  
  
      </div>
    );
}

export default BackgroundColor
