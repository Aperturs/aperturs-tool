import React from 'react'
import {Profile, Content ,Time} from '@/components'


const Tweet = () => {
  return (
    <div className=' 
    h-full w-full 
    glass_morphic_card__dark
    shadow-xl
    p-6'>
      <Profile />  
      <Content /> 
      <div className='absolute bottom-4'> 
      <Time /> 
      </div>  
    </div>
  )
}

export default Tweet
