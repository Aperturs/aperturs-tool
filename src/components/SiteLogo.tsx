import React from 'react'
import { useContext } from 'react'
import { AppContext } from '@/pages'

const SiteLogo = () => {

    const { favicon } = useContext(AppContext)
  return (
    <div className='absolute bottom-2 items-center hidden sm:flex right-1/2'>
      <img
      src={favicon}
      height='50'
      width='50px'
      />
      <p>
        <span className='text-2xl px-2 font-semi-bold'>Aperturs</span>
      </p>
    </div>
  )
}

export default SiteLogo
