import React from 'react'
import { useContext } from 'react'
import { AppContext } from '@/pages'

const Content = () => {

  const { fontSize,tweet } = useContext(AppContext)

  return (
    <div className='text-white opacity-80 mt-2'>
        <p className={`${fontSize} mx-2  mb-6`}>
          {tweet?.text}
        </p>
    </div>
  )
}

export default Content
