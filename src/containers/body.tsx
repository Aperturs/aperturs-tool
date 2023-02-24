import React from 'react'
import Tweet from './tweet'
import PlainTweet from './PlainTweet'
import { AppContext } from '@/pages'
import { useContext } from 'react'

const Body = () => {

  const {bgColor,bgType} = useContext(AppContext)

  return (
    <div className={` relative
    rounded-2xl p-12
    ${bgColor} items-center shadow-2xl`}
    >
      {bgType === 'Glass' ? <Tweet /> : <PlainTweet />}
    </div>
  )
}

export default Body




