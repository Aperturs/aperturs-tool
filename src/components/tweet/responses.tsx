import React from 'react'
import { useContext } from 'react'
import { AppContext } from '@/pages'


const Response = () => {
    const { cardColor,tweet } = useContext(AppContext)
  return (
    <div className='w-full flex justify-start mt-2 gap-2 ml-2 mb-4'>
      {
      tweet?.favorite_count
      }
      <p className='opacity-70'>likes </p>
      {tweet?.retweet_count}
      <p className='opacity-70'>
      retweets
      </p>
      </div>        
  )
}

export default Response
