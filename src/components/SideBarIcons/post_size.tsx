import React from 'react'
import { useContext, useState } from 'react';
import { AppContext } from '@/pages';
import { CgSize } from 'react-icons/cg'
import { CSSTransition } from 'react-transition-group'
import { SizeList } from './post_sizes';
import { IconType } from 'react-icons';


interface SizeProps {
    size: string;
    width: number;
    height: number;
    icon: IconType;
}




const PostSize = () => {

    return (
        <div className='sidebar_icon flex-col dropdown dropdown-right dropdown-hover'>
            <CgSize tabIndex={0} className={`text-3xl w-8 h-8 text-slate-500`} />
            <p className='icon_text'>Size</p>
            <Values />
        </div>
    )

}


const Values = () => {

    const [activeMenu, setActiveMenu] = useState('main');

    return (
        <div tabIndex={0} className='dropdown-content menu p-4 shadow bg-base-100 rounded-box w-46'>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={100}
                classNames="menu-primary"
                unmountOnExit
            >

                <div className="menu text-black">

                    {SizeList.map((size: SizeProps,tabIndex:number) => (
                        console.log(size),
                        <SingleSize 
                        key={tabIndex}
                        size={size.size}
                        width = {size.width}
                        height = {size.height}
                        icon = {size.icon}
                        />
                    ))}


                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'customSize'}
                timeout={100}
                classNames="menu-secondary"
                unmountOnExit
            >

                <div className="menu text-black">
                    <div
                        onClick={
                            () => setActiveMenu('main')
                        }
                    >
                        x
                    </div>
                    somethingelse
                </div>



            </CSSTransition>

        </div>
    )

}



const SingleSize = ({ size, width, height,icon:Icon }: SizeProps) => {

    const [hover,setHover] = useState(false)
    const { setWidth, setHeight } = useContext(AppContext);

    return (
      <div className="relative flex flex-row 
      w-[11rem]
      p-2
      items-center space-x-2 
      rounded-md cursor-pointer
       hover:bg-gray-100 my-1"
       onMouseEnter={() => setHover(true)}
       onMouseLeave={() => setHover(false)}
       onClick={() => {
           setWidth(width);
           setHeight(height);
       }
    }
       >
        <div className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <Icon  className="w-4 h-4 text-gray-600"/>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="truncate">
            <span className="text-gray-600">{size}</span>
          </div>
          <div className= {`${hover ? 'block' : 'hidden' }`} >
            <span className="text-gray-600 text-xs">{width} x {height}</span>
          </div>
        </div>
      </div>
    );
  };

const Input = () => {

    const { width, height, setWidth, setHeight } = useContext(AppContext);

    const handleBredthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newBredth = parseInt(event.target.value);
        setWidth(newBredth);
    };

    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newHeight = parseInt(event.target.value);
        setHeight(newHeight);
    };




    return (
        <div tabIndex={0} className="dropdown-content menu p-4 shadow bg-base-100 rounded-box w-46 ">
            <div className="form-control w-full max-w-xs flex-row ">
                <div className='mr-2'>
                    <label className="label">
                        <span className="label-text">Height</span>
                    </label>
                    <input
                        onChange={handleHeightChange}
                        type="text"
                        placeholder="1404"
                        className="input input-bordered w-16 max-w-xs rounded-sm font-regular p-2 text-gray-800"
                    />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Bredth</span>
                    </label>
                    <input
                        onChange={handleBredthChange}
                        type="text"
                        placeholder="1404"
                        className="input input-bordered w-16 max-w-xs rounded-sm font-regular p-2 text-gray-800"
                    />
                </div>
                <ul className="menu menu-horizontal bg-base-100 rounded-box p-4 mt-4">
                    <li tabIndex={0}>
                        <span className='text-gray-600'>px</span>
                        {/* <ul className="rounded-box bg-base-100 p-2 text-gray-600">
                              <li><a>px</a></li>
                              <li><a>in</a></li>
                              <li><a>mm</a></li>
                              <li><a>cm</a></li>
                          </ul> */}
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default PostSize
