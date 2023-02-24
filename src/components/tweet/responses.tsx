import React from 'react'
import { useContext } from 'react'
import { AppContext } from '@/pages'


const Response = () => {
    const { cardColor,tweet } = useContext(AppContext)

    const favCount = tweet?.favorite_count ?? 0
    const retweetCount = tweet?.retweet_count ?? 0

  return (
    <div className={`w-full flex justify-start mt-2 gap-2 ml-2 mb-4 
    ${cardColor == "Dark"? 'text-gray-100':'text-gray-700'  }`}>
      {
      favCount > 0 ? favCount : ''
      }
      {favCount > 0 && <p className='opacity-70'>likes </p>}
      {
      retweetCount > 0 ? retweetCount : ''
      }
      {retweetCount > 0 && <p className='opacity-70'>retweets </p>}
      </div>        
  )
}

export default Response
