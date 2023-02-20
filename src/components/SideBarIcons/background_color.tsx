import React from 'react'
import { useContext,useState } from 'react';
import { AppContext } from '@/pages';


const BackgroundColor = () => {

    const { bgColor } = useContext(AppContext)


    return (
      <div  className='sidebar_icon flex-col dropdown dropdown-right dropdown-hover'>
              <div tabIndex={0} className={`text-3xl ${bgColor} shadow-md rounded-full w-8 h-8 border-2 border-gray-300 text-slate-500`}>
              </div>
              <p className='icon_text'>Color</p>
              <Menu /> 
     </div> 
  
    );
}


const Menu = () => {
    return (
        <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44 items-center grid grid-cols-4 gap-1">

            <Color color ="bg-gradient-to-r from-cyan-500 to-blue-500" />
            <Color color ="bg-gradient-to-r from-cyan-600 to-blue-500" />
            <Color color ="bg-gradient-to-r from-cyan-800 to-blue-500" />
            <Color color ="bg-gradient-to-r from-cyan-100 to-blue-500" />
            <Color color ="bg-gradient-to-r from-cyan-300 to-blue-500" />
            <Color color ="bg-gradient-to-r from-cyan-100 to-blue-500" />
            <Color color ="bg-gradient-to-r from-cyan-500 to-blue-100" />
            <Color color ="bg-gradient-to-r from-cyan-500 to-blue-900" />
            
        </div>
    );
    }

const Color = ({color = "bg-red"}: {color: string}) => {

    const { setBgColor,bgColor } = useContext(AppContext)

return(
        <div className={`${color} w-8 h-8 rounded-xl hover:border-2 border-gray-400 m-1
        ${bgColor === color ? 'border-2  border-blue-800' : ''}`}
        onClick={() => {   
            setBgColor(color)
        }}

        >
        </div>
);
   
}



export default BackgroundColor
