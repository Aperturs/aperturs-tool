import Image from 'next/image'
import React from 'react'
import { BsTwitter } from 'react-icons/bs'


const Profile = () => {


    return (
        <div className='w-full flex justify-between'>
            <div className='flex justify-start'>
            <Image
                className='rounded-full w-10 h-10 mx-2'
                src='/images/profile.webp'
                alt='profile'
                width={30}
                height={30} />
            <div className='flex flex-col'>
                <p className='text-md mb-[-5px] text-white'>name</p>
                <p className='text-xs  text-gray-200'>@username</p>
            </div>
            </div>
            <BsTwitter className=' w-6 h-6'/>
        </div>
    )

}

export default Profile
