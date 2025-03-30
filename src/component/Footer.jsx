import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram, FaPinterest, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import Address from "./footer/address";
import pstImage01 from '../assets/pst-image01.jpg';
import pstImage02 from '../assets/pst-image02.jpg';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-gray-700">
          <a href="https://www.linkedin.com/company/preventive-smart-technology/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <h4 className="text-3xl font-semibold text-center sm:text-left">PREVENTIVE SMART TECHNOLOGY</h4>
          </a>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <p className="cursor-pointer hover:text-orange-400">OUR COMPANY</p>
            <p className="cursor-pointer hover:text-orange-400">LOCATIONS</p>
            <p className="cursor-pointer hover:text-orange-400">CONTACT</p>
          </div>
        </div>

        {/* Image and Address Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center py-10">
          {/* Images */}
          <div className="flex flex-col items-center gap-0"> {/* No gap */}
          <img src={pstImage01} className="w-full sm:w-100 h-50 object-contain" />
          <img src={pstImage02} className="w-full sm:w-100 h-50 object-contain" />

          </div>

          {/* Address */}
          <div className="sm:col-span-2">
            <Address />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6">
          {/* Contact Info */}
          <div className="text-gray-400 text-center sm:text-left">
            <p className="font-bold">Contact Us (Central Office)</p>
            <p>M : info@preventivesmarttechnology.co.in</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-orange-400 mt-4 sm:mt-0">
            <a href="https://youtube.com/@preventivesmarttechnology?si=fNrjbNGeBJiDUYaz" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
            <a href="https://www.linkedin.com/company/preventive-smart-technology/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <FaTwitter size={24} />
            <FaPinterest size={24} />
            <FaInstagram size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
