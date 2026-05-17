import logo from '../../assets/blog.png';
import { FaTelegramPlane } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { CiDark } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";


export const Header = () => {
    return (
        <div className='shadow-2xl'>
            <div className='flex items-center justify-between container mx-auto py-3'>
                <div className='flex items-center gap-1'>
                    <img className='w-10' src={logo} alt="" />
                    <p className='text-red-600 text-2xl font-bold'>Blog</p>
                </div>
                <div className='flex gap-4'>
                    <div className='flex gap-4'>
                        <p>Home</p>
                        <p>Livestyle</p>
                        <p>Features</p>
                        <p>Post Latout</p>
                        <p>Contact</p>
                    </div>
                    <div className='flex items-center mx-auto gap-2 rounded-md py-1 px-2 text-white bg-red-500'>
                        <FaTelegramPlane />
                        <p>Join us</p>
                    </div>
                    <div className='flex gap-4 items-center '>
                        <GoSearch />
                        <CiDark />
                        <CiMenuBurger />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;