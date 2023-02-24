import React from 'react'
import { useContext } from 'react'
import { AppContext } from '@/pages'

function extractTweetText(tweet: string): string {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const textWithoutUrls = tweet.replace(urlRegex, '');
  const trimmedText = textWithoutUrls.trim();
  return trimmedText;
}


const Content = () => {

  const { fontSize,tweet,cardColor } = useContext(AppContext)

  const mediaUrl = tweet?.entities?.media?.[0]?.media_url_https ?? '';

  return (
    <div className='mt-2'>
        <p className={`${fontSize} mx-2  mb-6 
        opacity-80
        ${cardColor == "Dark"? 'text-gray-100':'text-gray-800'  }
        `}>
          {extractTweetText(tweet?.full_text || '')}
        </p>

        {
          mediaUrl && (
            <div className='flex justify-center'>
              <img src={mediaUrl} className='rounded-lg mb-4' />
                </div>
          ) 
        }

    </div>
  )
}

export default Content
