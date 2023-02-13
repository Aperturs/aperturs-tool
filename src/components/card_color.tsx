import React from 'react'
import { useState } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs'


const CardColor = () => {

  return (
    <div className='sidebar_icon'>
      <div className='flex flex-col items-center justify-center w-full h-full'>

        <label className="swap swap-rotate  ">

          <input type="checkbox" />

          <BsSunFill className="swap-on fill-current w-6 h-6 text-slate-500" />
          <BsMoonFill className="swap-off fill-current w-6 h-6 text-slate-500" />
        </label>
        <p className='icon_text'>
          Card
        </p>

      </div>
    </div>
  );
}

export default CardColor
