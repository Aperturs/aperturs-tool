import { Tweet } from '@/containers';
import React from 'react'
import { useContext,useState } from 'react'
import { AppContext } from '../pages/index'





function LinktoId(link: string): string {
  // Get the last segment of the URL, which contains the tweet ID
  const segments = link.split('/');
  const id = segments[segments.length - 1];

  // Remove any query parameters or fragments from the ID
  const match = id.match(/^[0-9]+/);
  if (match) {
    return match[0];
  } else {
    throw new Error('Invalid tweet URL');
  }
}



const SearchBox = () => {

  const { setTweetId } = useContext(AppContext)
  const [search, setSearch] = useState('')

  return (
    <div className='max-w-lg flex-grow relative 
    rounded-xl transition-200 
    input_wrapper transition z-20 bg-slate-50
    '>
        <input
        className='w-full 
        pr-12 pl-12 py-3 
        rounded-xl text-black 
        text-opacity-80 dark:text-white 
        dark:text-opacity-90 transition' 
        type='text' 
        placeholder='Paste your Twitter Post URL here' 
        onChange={(e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
        try {
          const tweetId = LinktoId(e.target.value);
          console.log(tweetId)
          setTweetId(tweetId)
          // Do something with the tweet ID
        } catch (error) {
          // Handle the error gracefully
          console.log(error)
        }
        }}

      />
        
    </div>

  )
}

export default SearchBox
