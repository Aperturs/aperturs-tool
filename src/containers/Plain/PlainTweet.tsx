import React from 'react'
import {Profile, PlainContent ,PlainTime, Response} from '@/components'
import { AppContext } from '@/pages'
import { useContext } from 'react'


const PlainTweet = () => {

  const { response,cardColor  } = useContext(AppContext)

  return (
    <div className={` h-full w-full p-2`}>
      <Profile />  
      <PlainContent /> 
      <div className='absolute bottom-8'> 
      {response &&  <Response />}
      <PlainTime /> 
     </div> 

    </div>
  )
}

export default PlainTweet
