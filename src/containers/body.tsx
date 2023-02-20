import React from 'react'
import Tweet from './tweet'
import { AppContext } from '@/pages'
import { useContext } from 'react'

const Body = () => {

  const {bgColor} = useContext(AppContext)

  return (
    <div className={` relative
    rounded-2xl p-12
    ${bgColor} items-center shadow-2xl`}
    >
      <Tweet/>
    </div>
  )
}

export default Body




