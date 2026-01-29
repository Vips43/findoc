import React from "react";
import Happy_man from "/images/Happy_man.webp";
import { heroTags } from "./oth/oth";
import Buttons from "./oth/Buttons";

function HeroSection() {
 console.log(heroTags.map((hero) => hero.title));
 return (
  <>
   <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
    <div className="grid place-items-center">
     <div className="">
      <h3 className="font-semibold text-3xl sm:text-4xl lg:text-5xl max-w-xl leading-tight w-xs sm:w-full lg:w-xs">
       Your Gateway to Smart Investments
      </h3>
      <p className="text-sm sm:text-base mt-4 max-w-xl text-gray-600">
       All Your Investment Needs in One Place: Stocks, IPOs, Commodities,
       Derivatives, Futures, Options, Mutual Funds, and Sovereign Gold Bonds.
      </p>
      <form action="" className="px-5">
       <div className="bg-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center p-2 rounded-xl gap-4 sm:gap-2">
        <input
         type="text"
         placeholder="Name"
         className="bg-white px-3 py-2 rounded-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        <input
         type="tel"
         placeholder="Phone"
         className="bg-white px-3 py-2 rounded-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        <Buttons text={"Get started"} />
       </div>
       <small>
        <small>
         By clicking "Get Started," you agree to our{" "}
         <span className="text-orange-500">Terms & Conditions</span>, and
         confirm that you have read our{" "}
         <span className="text-orange-400">Privacy Policy</span>.
        </small>
       </small>
       <div className="flex items-center gap-3">
        <input type="radio" name="" id="terms" className="accent-orange-400" />
        <label htmlFor="terms">
         <small>
          <small>
           I hereby authorize the sending of notifications via SMS, messages,
           promotional, and informational content.
          </small>
         </small>
        </label>
       </div>
      </form>
     </div>
    </div>
    <div className="relative shrink-0 w-full lg:w-130 py-6 lg:py-10">
     <img
      src={Happy_man}
      alt="Happy investor"
      className="w-65 sm:w-[320px] lg:w-105 mx-auto drop-shadow-xl"
     />

     {heroTags.map((hero) => (
      <div className={`${hero.cls}`}>
       <img src={hero.img} alt="" className="h-8" />
       <p className="text-[0.65rem]">
        <span className="text-xs font-semibold">{hero.title}</span>
        <br /> <span className="leading-px">{hero.desc}</span>
       </p>
      </div>
     ))}
    </div>
   </div>
  </>
 );
}

export default HeroSection;
