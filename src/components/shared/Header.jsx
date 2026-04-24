import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format, compareAsc } from "date-fns";
import Marquee from "react-fast-marquee";

const breakingNews = [
  {
    id: 1,
    title: "Global oil prices drop by 5% as major producers increase supply.",
    category: "Economy"
  },
  {
    id: 2,
    title: "NASA's latest rover discovers ancient water traces on Mars' surface.",
    category: "Science"
  },
  {
    id: 3,
    title: "Real Madrid clinches a dramatic victory in the Champions League quarter-finals.",
    category: "Sports"
  },
  {
    id: 4,
    title: "New AI regulations proposed to ensure data privacy and ethical usage.",
    category: "Technology"
  },
  {
    id: 5,
    title: "Local authorities issue heavy rain alerts for coastal regions over the next 24 hours.",
    category: "Weather"
  },
  {
    id: 6,
    title: "Stock market hits record high as tech giants report better-than-expected earnings.",
    category: "Finance"
  }
];

const Header = () => {
    return (
        <div className='pt-9 pb-4'>
            <div className='max-w-[80%] text-center space-y-2 mx-auto'>
                <Image src={logo} alt='logo' width={300} className='mx-auto'></Image>
                <p className='text-gray-400 font-medium'>Journalism Without Fear or Favour</p>
                <h5 className='font-semibold text-gray-500'><span className='font-bold'>{format(new Date(), 'EEEE, ')}</span>
                <span className='text-gray-500'>{format(new Date(), 'MMM dd, yyyy')}</span></h5>
                <div className='p-2 flex shadow'>
                    <div className='bg-red-600 text-white font-medium p-1.5 px-2.5 rounded-l-lg'>Latest</div>
                    <Marquee pauseOnHover={true} className='font-medium text-gray-600'>
                        {breakingNews.map(nws=>(
                            <p key={nws.id}><span className='font-semibold text-black'>{nws.category}: </span>{nws.title}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Header;