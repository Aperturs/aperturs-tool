import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Navbar,SideBar, Body,PlainBody } from '@/containers'
import { TwitterLink } from '@/components'
import { createContext,useState,useEffect } from 'react'
import React, { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

interface TweetData {
  
  full_text: string;
  created_at: string;
  user: {
    name: string;
    profile_image_url_https: string;
    screen_name: string;
  };
  favorite_count: number;
  retweet_count: number;    
  replies_count: number;
  entities: {
    media: {
      media_url_https: string;
    }[];
  };

}


interface Size {
  width: number;
  height: number;
}

export const AppContext = createContext({
  
  bgType: '',
  setBgType: (bgType: string) => {},
  response: false,
  setResponse: (response: boolean) => {},
  bgColor: '',
  setBgColor: (bgColor: string) => {},
  fontSize: '',
  setFontSize: (fontSize: string) => {},
  cardColor: '',
  setCardColor: (cardColor: string) => {},
  onButtonClick: () => {},
  tweetId: '',
  setTweetId: (tweetId: string) => {},
  tweet: null as TweetData | null,
  height: 0,
  setHeight: (height: number) => {},
  width: 0,
  setWidth: (width: number) => {},
  textColor: '',
  setTextColor: (textColor: string) => {}

})

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [bgType, setBgType] = useState('Plain')
  const [response, setResponse] = useState(false)
  const [bgColor, setBgColor] = useState('white')
  const [fontSize, setFontSize] = useState('text-lg')
  const [cardColor, setCardColor] = useState('Dark')
  const [tweet, setTweet] = useState<TweetData | null>(null);
  const [tweetId, setTweetId] = useState('');
  const [height, setHeight] = useState(1080);
  const [width, setWidth] = useState(1080);
  const [textColor, setTextColor] = useState('text-black')

  useEffect(() => {
    const fetchTweet = async () => {
      if (!tweetId) return; // Skip fetching if tweetId is empty
      const res = await fetch(`/api/tweet?id=${tweetId}`);
      if (res.ok) {
        const data = await res.json();
        setTweet(data);
        console.log(data)
      }
    };
  
    fetchTweet();
  }, [tweetId]);


  const ref = useRef<HTMLDivElement>(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null || ref.current.firstChild === null || !(ref.current.firstChild instanceof HTMLElement)) {
      return;
    }
  
    toPng(ref.current.firstChild, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `tweet.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  
  

  return (
    <AppContext.Provider value={{
      
      bgType,setBgType,
      response,setResponse,
      bgColor,setBgColor,
      fontSize,setFontSize,
      cardColor,setCardColor,
      tweetId,setTweetId,
      tweet,
      onButtonClick,
      height,setHeight,
      width,setWidth,
      textColor,setTextColor

    }}>
      <Head>
        <title>Aperturs</title>
        <meta name="description" content="Convert Your tweets into beautiful images" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className= 'relative sm:h-screen'>
        <Navbar />
        <SideBar />
        <div className='absolute min-h-screen min-w-full flex justify-center top-0
         left-0 items-center '  ref={ref}>  
          {bgType === 'Glass' ? <Body/> : <PlainBody/>}
        </div>  
        <TwitterLink />
      </section>    
     </AppContext.Provider> 
       
)}


