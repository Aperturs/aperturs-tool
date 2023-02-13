import React from 'react'
import {IoMdDownload} from 'react-icons/io'

const Download = () => {
  return (
    <div className='sidebar_icon flex-col bg-accent hover:bg-accent absolute bottom-4 left-2'>
        <IoMdDownload className="fill-current w-6 h-6 text-white" />
        <p className='icon_text text-white'>
            Download
        </p>                 
    </div>
  )
}

export default Download
