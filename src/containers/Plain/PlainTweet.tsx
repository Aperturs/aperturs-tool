import React from 'react'
import {PlainProfile, PlainContent ,PlainTime, PlainResponse} from '@/components'
import { AppContext } from '@/pages'
import { useContext } from 'react'


const PlainTweet = () => {

  const { response,cardColor  } = useContext(AppContext)

  return (
    <div className={` w-full p-2`}>
      <PlainProfile />  
      <PlainContent /> 
      <div className='absolute bottom-8'> 
      {response &&  <PlainResponse />}
      <PlainTime /> 
     </div> 

    </div>
  )
}

export default PlainTweet
