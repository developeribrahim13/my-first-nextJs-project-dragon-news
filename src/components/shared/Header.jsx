import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format, compareAsc } from "date-fns";

const Header = () => {
    return (
        <div className='pt-9 pb-4'>
            <div className='max-w-[80%] text-center space-y-2 mx-auto'>
                <Image src={logo} alt='logo' width={300} className='mx-auto'></Image>
                <p className='text-gray-400 font-medium'>Journalism Without Fear or Favour</p>
                <h5 className='font-semibold text-gray-500'><span className='font-bold'>{format(new Date(), 'EEEE, ')}</span>
                <span className='text-gray-500'>{format(new Date(), 'MMM dd, yyyy')}</span></h5>
            </div>
        </div>
    );
};

export default Header;