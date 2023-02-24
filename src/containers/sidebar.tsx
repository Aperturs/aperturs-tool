import React from 'react'
import { useContext } from 'react'
import { AppContext } from '@/pages'
import { BackgroundColor, BackgroundType, CardColor, Responses, Size,Download } from '@/components'

const SideBar = () => {


  return (
    <div className='absolute top-0 left-0 h-screen w-24 m-0 
    flex flex-col shadow-lg z-20'>
      <BackgroundColor />
      {/* <BackgroundType /> */}
      <CardColor />
      <Responses />
      <Size />
      <Download />
    </div>
  )
}

export default SideBar
