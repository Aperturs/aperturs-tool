import React from 'react'
import {IoMdDownload} from 'react-icons/io'
import { useContext } from 'react'
import { AppContext } from '@/pages'


const Download = () => {

  const {onButtonClick} = useContext(AppContext)
  
  return (
    <div className='sidebar_icon flex-col bg-accent hover:bg-accent absolute bottom-0 left-2 cursor-pointer'
    onClick={() => {
      onButtonClick()
    }}
    >
        <IoMdDownload className="fill-current w-6 h-6 text-white" />
        <p className='icon_text text-white'>
            Download
        </p>                 
    </div>
  )
}

export default Download
