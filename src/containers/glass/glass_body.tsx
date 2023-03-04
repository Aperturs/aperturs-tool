import React from 'react'
import Tweet from './tweet'
import PlainTweet from '../Plain/PlainTweet'
import { AppContext } from '@/pages'
import { useContext } from 'react'

const Body = () => {

  const {bgColor, bgType, width, height} = useContext(AppContext)
  const maxHeight = 600 // adjust this value as necessary
  const scaleFactor = Math.min(1, maxHeight / height)
  const scaledWidth = Math.round(width * scaleFactor)
  const scaledHeight = Math.round(height * scaleFactor)

  // const backgroundImage = bgType === 'Glass' ? 'url(tweet-background.jpg)' : 'url(plain-tweet-background.jpg)'

  return (

    <div className={`relative rounded-2xl p-12 ${bgColor} items-center align-middle shadow-2xl`}
         style={{
           width: `${scaledWidth}px`,
           height: `${scaledHeight}px`,
         }}>
      {
      bgType === 'Glass' ? <Tweet /> : <PlainTweet />
      }
    </div>

  )
}


export default Body




