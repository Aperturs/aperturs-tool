import React from 'react'
import { useState } from 'react';


const BackgroundColor = () => {

    return (
      <div  className='sidebar_icon flex-col dropdown dropdown-right dropdown-hover'>
              <div tabIndex={0} className='text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-8 h-8 border-2 border-gray-300 text-slate-500' >
              </div>
              <p className='icon_text '>
                  Color
              </p>
              <Menu />
     
     </div> 
  
    );
}


const Menu = () => {
    return (
        <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-20 items-center">

        </div>
    );
    }
export default BackgroundColor
