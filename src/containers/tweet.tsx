import React from 'react'
import {Profile, Content ,Time, Response} from '@/components'
import { AppContext } from '@/pages'
import { useContext } from 'react'


const Tweet = () => {

  const { response,cardColor  } = useContext(AppContext)

  return (
    <div className={`
    ${cardColor === 'Dark' ?  'glass_morphic_card__dark' : 'glass_morphic_card__light'}
    shadow-xl
    p-6`}>
      <Profile />  
      <Content /> 
      {response &&  <Response />}
      <div className='absolute bottom-2'> 
      <Time /> 
     </div> 

    </div>
  )
}

export default Tweet
