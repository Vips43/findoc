import {
 FaLocationDot,
 FaFacebook,
 FaXTwitter,
 FaInstagram,
 FaYoutube,
 FaLinkedin,
 FaTelegram,
} from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Footer() {
 return (
  <footer className="bg-neutral-800 text-white px-6 py-12">
   <main className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="mb-10">
     <h2 className="text-2xl sm:text-3xl font-semibold">Reach out to us.</h2>
     <h2 className="text-2xl sm:text-3xl font-semibold">
      We're always here to help!
     </h2>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {/* Address */}
     <div className="flex gap-4">
      <FaLocationDot className="text-primary-600 text-3xl shrink-0" />
      <div className="text-sm leading-relaxed">
       <h4 className="opacity-60 uppercase tracking-wide mb-1">
        Registered Address
       </h4>
       <p>1210/1211/1212/1213, 1213A, Exchange Plaza,</p>
       <p>Near Mercury Hotel, Opp. WTC Tower, GIFT City,</p>
       <p>Gandhinagar – 382050, Gujarat, India.</p>

       {/* Social Icons */}
       <div className="flex gap-3 mt-4 text-lg">
        <FaFacebook className="social-icon text-blue-600" />
        <FaXTwitter className="social-icon text-black" />
        <FaInstagram className="social-icon text-pink-600" />
        <FaYoutube className="social-icon text-red-600" />
        <FaLinkedin className="social-icon text-blue-700" />
        <FaTelegram className="social-icon text-cyan-600" />
       </div>
      </div>
     </div>

     {/* Call */}
     <div className="flex gap-4">
      <IoCall className="text-primary-600 text-3xl shrink-0" />
      <div>
       <h3 className="opacity-60 uppercase tracking-wide text-sm">
        We're just a call away
       </h3>
       <p className="mt-1 font-medium">+91-999999999</p>
      </div>
     </div>

     {/* Email */}
     <div className="flex gap-4">
      <MdEmail className="text-primary-600 text-3xl shrink-0" />
      <div>
       <h3 className="opacity-60 uppercase tracking-wide text-sm">
        Write to us
       </h3>
       <p className="mt-1 font-medium">helpdesk@help.com</p>
      </div>
     </div>
    </div>

    {/* Bottom bar */}
    <div className="mt-12 border-t border-white/10 pt-6 text-xs text-gray-400 text-center">
     © {new Date().getFullYear()} StockZ. All rights reserved.
    </div>
   </main>
  </footer>
 );
}

export default Footer;
