import { useState } from 'react';
import logo from '../../assets/blog.png';
import { FaTelegramPlane } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { CiDark } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

export const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='shadow-2xl bg-white relative'>
            <div className='flex items-center justify-between container mx-auto py-3 px-4'>
                <div className='flex items-center gap-1'>
                    <img className='w-10' src={logo} alt="" />
                    <p className='text-red-600 text-2xl font-bold'>Blog</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='hidden md:flex gap-4'>
                        <p>Home</p>
                        <p>Lifestyle</p>
                        <p>Features</p>
                        <p>Post Layout</p>
                        <p>Contact</p>
                    </div>
                    <div className='hidden md:flex items-center mx-auto gap-2 rounded-md py-1 px-2 text-white bg-red-500'>
                        <FaTelegramPlane />
                        <p>Join us</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <GoSearch />
                        <CiDark />
                        <CiMenuBurger className='block md:hidden cursor-pointer' onClick={() => setOpen(!open)} />
                    </div>
                </div>
            </div>
            {open && (
                <div className='absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-3 p-4 md:hidden border-t'>
                    <p>Home</p>
                    <p>Lifestyle</p>
                    <p>Features</p>
                    <p>Post Layout</p>
                    <p>Contact</p>
                    <div className='flex items-center gap-2 rounded-md py-1 px-2 text-white bg-red-500 w-fit'>
                        <FaTelegramPlane />
                        <p>Join us</p>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Header;