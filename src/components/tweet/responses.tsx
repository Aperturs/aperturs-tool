import React from 'react'
import { useContext } from 'react'
import { AppContext } from '@/pages'
import {AiFillHeart} from 'react-icons/ai'
import {RiRepeatLine} from 'react-icons/ri'

const Response = () => {
    const { cardColor,tweet } = useContext(AppContext)
  return (
    <div className='w-full flex justify-start mt-2 gap-2 ml-2 mb-4'>
      {
      tweet?.favorite_count
      }
      <AiFillHeart className='text-gray-600 opacity-80 w-6 h-6'/>
      {tweet?.retweet_count}
      <RiRepeatLine className='text-gray-600 opacity-80 w-6 h-6'/>
      </div>        
  )
}

export default Response
