import Image from 'next/image'
import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { AppContext } from '@/pages'
import { useContext } from 'react'
import { link } from 'fs'



const Profile = () => {


    const { cardColor,tweet  } = useContext(AppContext)

    return (
        <div className='w-full flex justify-between'>
            <div className='flex justify-start'>
            <Image
                className='rounded-full w-10 h-10 mx-2'
                src = {tweet?.user?.profile_image_url_https || '/images/profile.webp' }
                alt='profile'
                width={30}
                height={30} />
            <div className='flex flex-col'>
                <p className='text-md mb-[-5px] text-white'>
                    {tweet?.user.name}
                </p>
                <p className='text-xs  text-gray-200'>
                    @{tweet?.user.screen_name}
                </p>
            </div>
            </div>
            <BsTwitter className='text-[#1BA0F0] w-6 h-6'/>
        </div>
    )

}

export default Profile
