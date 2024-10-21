import React from 'react';
import './index.css';

export default function Footer({style}) {
  return (
    <div className='Footer p-[56px] flex justify-between items-center' style={style}>
        <div className='flex flex-col'>
            <p>opyright © 2023 Gift2u - Tous droits réservés.</p>
            <a href='https://openart.ai/home' target='_blank' className='underline cursor-pointer text-[rgb(0,120,161)] hover:text-black'>Create Art or Modify Images with AI | OpenArt</a>
        </div>
        <div className='mr-[10vw]'>
            <a href='https://twitter.com/gift2utoken' target='_blank' className='underline cursor-pointer text-[rgb(0,120,161)] hover:text-black'><img src='../../assets/img/twitter.jpg' className='w-[50px]'/></a>
        </div>
    </div>
  )
}
