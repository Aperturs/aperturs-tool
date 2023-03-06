import React from 'react'
import { useContext } from 'react'
import { AppContext } from '@/pages'

function extractTweetText(tweet: string): string {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const textWithoutUrls = tweet.replace(urlRegex, '');
  const trimmedText = textWithoutUrls.trim();
  return trimmedText;
}


const PlainContent = () => {

  const { fontSize,tweet,textColor } = useContext(AppContext)

  const mediaUrl = tweet?.entities?.media?.[0]?.media_url_https ?? '';
  const tweetText = extractTweetText(tweet?.full_text || 
    `Start creating beautiful images of your 
    posts by entering your input link above and sharing it with others.`
    )
    const tweetLines = tweetText.split('\n');


  return (
    <div className='mt-4'>
          {tweetLines.map((line, index) => (
        <p
          key={index}
          className={`${fontSize} mx-2 mb-2 opacity-80 text-lg ${textColor}`}    
        >
          {line}
        </p>
      ))}
        {/* {
          mediaUrl && (
            <div className='flex justify-center overflow-hidden'>
              <img src={mediaUrl} className='rounded-lg mb-4' />
            </div>
          ) 
        } */}

    </div>
  )
}

export default PlainContent
