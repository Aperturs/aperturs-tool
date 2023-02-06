import React from 'react'
import SearchBox from '../components/search_box'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'

const Navbar = () => {

  return (
    <div className='flex-grow flex justify-between p-12'>
      <h1>
        Aperturs
      </h1>
      <SearchBox />

      <label className="swap swap-rotate hover:bg-gray-700 w-12 hover:bg-opacity-40 rounded-full ">

        <input type="checkbox" />

        <BsSunFill className="swap-on fill-current w-6 h-6" />
        <BsMoonFill className="swap-off fill-current w-6 h-6 " />
      </label>
    </div>
  )

}

export default Navbar
