import React from 'react'

const TwitterLink = () => {
  return (
    <div className='absolute bottom-0 right-0'>
    <div className="dropdown dropdown-top dropdown-end dropdown-hover">
  <label tabIndex={0} className="btn m-1 rounded-none">Meet The Developer</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li className='text-gray-800'><a href='https://twitter.com/swarajbachu' >Twitter</a></li>
  </ul>
</div>
    </div>
  )
}

export default TwitterLink
