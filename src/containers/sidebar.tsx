import React from 'react'
import { useContext } from 'react'
import { AppContext } from '@/pages'
import { BackgroundColor, BackgroundType, 
  CardColor,PlainColors, Responses,
   Size,Download,PostSize,TextColor } from '@/components'

const SideBar = () => {

  const { bgType,favicon } = useContext(AppContext)

  return (
    <div className='absolute top-0 left-0 h-screen w-24 m-0 
    flex flex-col shadow-lg z-20'>
      {
        bgType === 'Plain' ? <PlainColors /> : <BackgroundColor/>
      }
      {/* <BackgroundType /> */}
      {
        bgType === 'Glass' ? <CardColor /> : <TextColor />
      }
      <Responses />
      <Size />
      <PostSize />
      <Download />
    </div>
  )
}

export default SideBar
