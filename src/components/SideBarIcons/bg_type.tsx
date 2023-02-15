import React from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { BiAperture } from 'react-icons/bi'


const BackgroundType = () => {
    return (
        <div className="dropdown dropdown-right dropdown-hover sidebar_icon">
            <div tabIndex={0} className='flex flex-col items-center justify-center w-full h-full'>
            <BiAperture className='text-3xl text-slate-500 ' />
            <p className='icon_text '>
                Fill
            </p>
        </div>
            <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-20 items-center">
                <div className='flex items-center justify-center  p-3 w-14 h-14 hover:border-2 hover:border-gray-600 rounded-lg'>
                    <AiFillEye className='text-3xl text-slate-400' />
                </div>
                <div className='flex items-center justify-center  p-3 w-14 h-14  hover:border-2 hover:border-gray-600 rounded-lg'>
                    <AiFillEyeInvisible className='text-3xl text-slate-400' />
                </div>
            </div>
        </div>
    )
}

export default BackgroundType
