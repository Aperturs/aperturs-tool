import React from 'react'
import {Profile, Content ,Time, Response} from '@/components'
import { AppContext } from '@/pages'
import { useContext } from 'react'


const PlainTweet = () => {

  const { response,cardColor  } = useContext(AppContext)

  return (
    <div className={`h-full w-full p-2`}>
      <Profile />  
      <Content /> 
      {response &&  <Response />}
      <div className='absolute bottom-2'> 
      <Time /> 
     </div> 

    </div>
  )
}

export default PlainTweet
