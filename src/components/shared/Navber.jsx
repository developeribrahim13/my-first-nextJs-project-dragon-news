import Link from 'next/link';
import React from 'react';
import avatar from '@/assets/user.png'
import Image from 'next/image';
import Navlink from './Navlink';

const Navber = () => {
    return (
        <div>
            <div className='max-w-[80%] mx-auto flex justify-between'>
                <ul className='flex justify-center sm:pl-25 text-gray-400 font-medium w-full gap-3.5'>
                    <li><Navlink href={"/"}>Home</Navlink></li>
                    <li><Navlink href={"/about"}>About</Navlink></li>
                    <li><Navlink href={"/career"}>Career</Navlink></li>
                </ul>
                <div className='flex justify-between gap-2.5'>
                    <Image src={avatar} alt='avatar'></Image>
                    <button className='btn btn-neutral'><Navlink href={"/login"}></Navlink>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navber;