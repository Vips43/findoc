import React from "react";
import logo from "/images/logo.svg";
import Buttons from "./oth/Buttons";
import { IoSearch } from "react-icons/io5";
import MobileNav from "./oth/MobileNav";

function Navbar() {
 return (
  <>
   <div className="max-h-30 w-full bg-white space-y-2 md:px-16 pt-4 drop-shadow-lg">
    {/* upper div  */}
    <div className="flex items-center gap-5 justify-around">
     <img src={logo} alt="" className="w-40" />
     <div className="hidden flex-1 md:flex items-center justify-between px-2 py-1 rounded border tracking-tight border-gray-400">
      <input
       type="search"
       placeholder="Search for stocks or mutual funds.."
       className="w-full"
      />
      <IoSearch className="text-primary" />
     </div>
     <div className="flex gap-4">
      <Buttons
       text={"Login"}
       color="#fe9447"
       variant="outlined"
       bgClr="white"
       border="1px solid #fe9447"
      />
      <Buttons text={"Open Demat Account"} color="white" />
     </div>
    </div>
    {/* bottom div  */}
    <div className="flex">
      <MobileNav />
     <div className="max-w-xl hidden md:flex items-center">

     </div>
    </div>
   </div>
  </>
 );
}

export default Navbar;
