import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const TopHeader = () => {
    return (
        <div className="bg-linear-to-r from-[#5885FD] to-[#FD5672] text-white py-2">
            <div className="flex items-center justify-between container mx-auto px-20">
                <div className="flex gap-6">
                    <FaFacebook />
                    <FaGithub />
                    <FaLinkedin />
                    <FaYoutube />
                </div>
                <div className="flex gap-6">
                    <p>About us</p>
                    <p>Our story</p>
                    <p>Projects</p>
                </div>
            </div>
        </div>
    )
}
export default TopHeader;
