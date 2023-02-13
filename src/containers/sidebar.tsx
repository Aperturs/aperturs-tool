import React from 'react'
import { BackgroundColor, BackgroundType, CardColor, Responses, Size,Download } from '@/components'

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-24 m-0 
    flex flex-col shadow-lg '>
      <BackgroundColor />
      <BackgroundType />
      <CardColor />
      <Responses />
      <Size />
      <Download />
    </div>
  )
}

export default SideBar
