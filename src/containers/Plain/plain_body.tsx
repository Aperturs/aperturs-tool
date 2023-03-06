import { AppContext } from '@/pages'
import React, { useContext } from 'react'
import { PlainTweet } from '..'

const PlainBody = () => {

    const {bgColor, bgType, width, height} = useContext(AppContext)
    const scaleBy = width > height ? height : width
    const maxWidth = 500 // adjust this value as necessary
    const scaleFactor = Math.min(1, maxWidth / scaleBy)
    const scaledWidth = Math.round(width * scaleFactor)
    const scaledHeight = Math.round(height * scaleFactor)
    
  return (
    <div className={`relative 
    rounded-2xl ${bgColor}
     p-12 bg-white items-center align-middle shadow-2xl`}
    style={{
        width: `${scaledWidth}px`,
        height: `${scaledHeight}px`,
    }}>
      <PlainTweet />
    </div>
  )
}

export default PlainBody
