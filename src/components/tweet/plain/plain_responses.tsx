import React from 'react'
import { useContext } from 'react'
import { AppContext } from '@/pages'


const PlainResponse = () => {
    const { cardColor,tweet,textColor } = useContext(AppContext)

    const favCount = tweet?.favorite_count ?? 4444
    // const retweetCount = tweet?.retweet_count ?? 444

  return (
    <div className={`w-full flex font-bold justify-start gap-2  ${textColor}`}>
      {
      favCount > 0 ? favCount : ''
      }
      {favCount > 0 && <p className='opacity-70'>likes </p>}
      {/* {
      retweetCount > 0 ? retweetCount : ''
      }
      {retweetCount > 0 && <p className='opacity-70'>retweets </p>} */}
      </div>        
  )
}

export default PlainResponse
