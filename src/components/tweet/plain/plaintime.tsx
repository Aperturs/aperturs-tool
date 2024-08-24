import React from 'react'
import { useContext } from 'react'
import { AppContext } from '@/pages'


function convertDate(dateStr: string): string {
  const date = new Date(dateStr);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 || 12;
  const timeString = `${hour12}:${minutes.toString().padStart(2, '0')} ${amPm}`;
  const dateString = `${day} ${month} ${year}`;

  return `${timeString} · ${dateString}`;
}


const PlainTime = () => {

  const { textColor,tweet } = useContext(AppContext)


  const createdTime = convertDate(tweet?.created_at || "Fri Feb 17 16:38:18 +0000 2023")

  return (
      <p className={`${textColor} w-full flex items-center  text-lg opacity-60 `}>
        {createdTime}
      </p>
  )
}

export default PlainTime
