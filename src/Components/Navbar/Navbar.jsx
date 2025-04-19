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
        <nav className='flex items-center justify-between container mx-auto md:px-[80px] px-[20px] md:h-[10vh] h-[8vh] z-50'>
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
                    {!open ? <IoMenu className='text-[20px]' /> : <IoClose className='text-[20px]' />}
                </button>
                <ul className='uppercase md:hidden absolute left-0 top-0 w-full bg-green-950 z-0'>
                    {
                        navlink.map((link) => <li key={link.id} className='font-medium text-[#5c5c5c]'><a href={link.path}>{link.name}</a></li>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;