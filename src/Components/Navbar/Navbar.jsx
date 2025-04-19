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
        <nav className='flex items-center justify-between container mx-auto md:px-[80px] px-[20px] md:h-[10vh] h-[8vh] z-50 bg-[#06013d]'>
            <a className='font-bold text-[25px] text-[#5c5c5c]' href="/">
                LOGO
            </a>
            <ul className='md:flex md:items-center md:gap-[30px] uppercase hidden'>
                {
                    navlink.map((link) => <li key={link.id} className='font-medium text-[#5c5c5c]'><a href={link.path}>{link.name}</a></li>)
                }
            </ul>
            <div>
                <button onClick={handleOpen} className='md:hidden'>
                    {!open ? <IoMenu className='text-[25px] text-[#fff]' /> : <IoClose className='text-[28px] text-[#fff]' />}
                </button>
                <ul className={`uppercase md:hidden duration-1000 w-full left-0 flex items-center flex-col gap-[20px] py-[50px] ${open ? "top-[8vh]" : "-top-[580px]"} absolute w-full bg-[#06013d] z-0`}>
                    {
                        navlink.map((link) => <li key={link.id} className='font-medium text-[#ffffff]'><a href={link.path}>{link.name}</a></li>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;