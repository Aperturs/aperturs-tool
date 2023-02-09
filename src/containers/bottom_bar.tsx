import React from 'react'
import { BackgroundType,BackgroundColor,CardColor } from '@/components'

const BottomBar = () => {
  return (
    <div className='fixed left-0 right-0 bottom-16 flex justify-center z-20 pointer-events-none mobile-command-bar-bottom-position-first'>
      <div className='flex items-center justify-center
       bg-slate-50 dark:bg-slate-900
        rounded-xl shadow-lg pointer-events-auto p-3 '>
        <BackgroundType />    
        <BackgroundColor />
        <CardColor />   
    </div> 
    </div>
  )
}

export default BottomBar
