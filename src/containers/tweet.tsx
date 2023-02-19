import React from 'react'
import {Profile, Content ,Time} from '@/components'
import { AppContext } from '@/pages'
import { useContext } from 'react'


const Tweet = () => {

  const { response,cardColor  } = useContext(AppContext)

  return (
    <div className={`h-full w-full 
    ${cardColor === 'Dark' ?  'glass_morphic_card__dark' : 'glass_morphic_card__light'}
    shadow-xl
    p-6`}>
      <Profile />  
      <Content /> 
      <div className='absolute bottom-4'> 
  
      {response &&
       <Time /> 
      }
             </div> 

    </div>
  )
}

export default Tweet
