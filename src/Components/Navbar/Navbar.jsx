import React, { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';

const navlink = [
    {
        name: "home",
        path: "/",
        id: 1
    },

    {
        name: "about",
        path: "/about",
        id: 2
    },

    {
        name: "service",
        path: "/service",
        id: 3
    },

    {
        name: "blog",
        path: "/blog",
        id: 4
    },

    {
        name: "contacts",
        path: "/contacts",
        id: 5
    },

]


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <nav className='flex items-center justify-between container mx-auto md:px-[80px] px-[20px] md:h-[10vh] h-[8vh] sticky top-0 left-0 z-50 bg-[#06013d]'>
            <a className='font-bold md:text-[25px] text-[22px] text-[#fff]' href="/">
                LOGO
            </a>
            <ul className='md:flex md:items-center md:gap-[30px] uppercase hidden'>
                {
                    navlink.map((link) => <li key={link.id} className='font-medium text-[#ffffff]'><a href={link.path}>{link.name}</a></li>)
                }
            </ul>
            <div className='md:hidden'>
                <button onClick={handleOpen}>
                    {!open ? <IoMenu className='text-[25px] text-[#fff]' /> : <IoClose className='text-[28px] text-[#fff]' />}
                </button>
                <ul className={`uppercase md:hidden duration-700 w-full top-[8vh] flex items-center flex-col gap-[20px] py-[50px] ${open ? "left-0" : "-left-[100%]"} absolute w-full bg-[#06013d] -z-50`}>
                    {
                        navlink.map((link) => <li key={link.id} className='font-medium text-[#ffffff]'><a href={link.path}>{link.name}</a></li>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;