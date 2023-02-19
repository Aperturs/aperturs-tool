import React from 'react'
import { useContext } from 'react'
import { AppContext } from '@/pages'

const Time = () => {

  const { cardColor } = useContext(AppContext)
  return (
      <p className={`${ cardColor === "Dark" ? ' text-gray-200 ' : 'text-gray-700 '} mx-2 text-lg opacity-60 `}>
        9:00 AM : 1 Jan 2021
      </p>
  )
}

export default Time
