import React from 'react'
import SearchBox from '../components/search_box'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'


const Navbar = () => {


  return (
    <div className='relative flex-grow flex justify-end mr-10 py-2 pl-28 z-10 sm:ml-0 ml-24'>
      <SearchBox />
      
      {/* <label className="swap swap-rotate hover:bg-gray-700 w-12 hover:bg-opacity-40 rounded-full mx-2">
        <input type="checkbox" />
        <BsSunFill className="swap-on fill-current w-6 h-6" />
        <BsMoonFill className="swap-off fill-current w-6 h-6 " />
      </label> */}

    </div>
  )

}

export default Navbar
