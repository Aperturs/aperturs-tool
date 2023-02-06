import React from 'react'
import { useState } from 'react'
import {BiAperture} from 'react-icons/bi'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'



const BackgroundType = () => {

  const [open, setOpen] = useState(false)

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
    onMouseEnter={() => {setOpen(true)}}
    onMouseLeave={() => {setOpen(false)}}
    onTouchStart={() => {setOpen(true)}}
    onTouchEnd={() => {setOpen(false)}}
    >
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <BiAperture className='text-3xl text-slate-500' />
            <p className='text-gray-500 text-[10px] pt-1 font-bold '>
                Fill
            </p>
        </div>
        {open && <BackgroundTypeMenu />}


    </div>
  )

}


const BackgroundTypeMenu = () => {
    return (
        <div className='absolute flex top-[-60px] left-[-20px] bg-gray-200 
        rounded-md bg-clip-padding backdrop-filter
         backdrop-blur-md bg-opacity-80 border
          border-gray-100 p-1
          before:scale-0 after:scale-90
          ' >
        <div className='flex items-center justify-center  p-3 w-14 h-14 hover:border-2 hover:border-gray-600 rounded-lg'>
            <AiFillEye className='text-3xl text-slate-500' />
        </div>
        <div className='flex items-center justify-center  p-3 w-14 h-14  hover:border-2 hover:border-gray-600 rounded-lg'>
            <AiFillEyeInvisible className='text-3xl text-slate-500' />
        </div>
        </div>
    );
}

export default BackgroundType 
