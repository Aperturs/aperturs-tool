import React from 'react'
import styles from './search.module.css'

const SearchBox = () => {
  return (
    <div className='max-w-lg flex-grow relative 
    rounded-xl transition-200 
    input_wrapper transition z-20 bg-slate-50
    '>
        <input
        className='w-full 
        pr-12 pl-12 py-3 
        rounded-xl text-black 
        text-opacity-80 dark:text-white 
        dark:text-opacity-90 transition' 
        type='text' 
        placeholder='Search' 
        />
        
    </div>

  )
}

export default SearchBox
