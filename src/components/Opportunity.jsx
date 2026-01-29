import React from "react";
import Buttons from "./oth/Buttons";
import { learnTab, videoSVG } from "./oth/oth";

function Opportunity() {
 return (
  <main className="w-full relative mt-12 px-4 sm:px-6 lg:px-10 overflow-hidden">
   <div className="relative grid grid-cols-1 md:grid-cols-3 items-center gap-6">
    <div className="relative md:col-span-1">
     <img
      src="/images/chakri.png"
      alt=""
      className="md:hidden absolute top-0 right-0 w-64 animate-spin [animation-duration:20s] z-0"
     />

     <img
      src="/images/foreign-investors-india.webp"
      alt="Foreign Investors India"
      className="relative z-10 w-full max-w-md mx-auto"
     />
    </div>

    <section className="md:col-span-1 text-center md:text-left px-2">
     <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
      <span className="text-primary-600">Invest</span> in India a Land of
      Billion <span className="text-primary-600">Opportunities</span>
     </h2>

     <p className="mt-3 text-sm sm:text-base text-gray-600">
      Now is the best time to invest in India. Act now and head higher.
     </p>

     <div className="mt-5">
      <Buttons
       text="Know More"
       variant="outlined"
       className="border border-primary text-primary bg-white hover:bg-primary-50 px-5"
      />
     </div>
    </section>

    <div className="hidden md:flex justify-center">
     <img
      src="/images/chakri.png"
      alt=""
      className="w-72 opacity-60 animate-spin [animation-duration:20s]"
     />
    </div>
   </div>
   {/* next section / */}
   <section className="mt-10 mb-5 grid place-items-center gap-1">
    <div className="my-4">
     <img src="/images/Book_icon.svg" alt="" />
    </div>
    <h3 className="text-2xl">Learn with Findoc</h3>
    <p>Our immersive, 360-degree approach equips you with the </p>
    <p>necessary Knowledge,</p>
    <p>Skills, and Tools, enabling you to trade and invest confidently in</p>
    <p>the financial markets.</p>

    <div className="mt-5 flex gap-3 border py-0.5 border-primary px-7 md:px-12 rounded-full text-sm shadow-[inset_2px_2px_10px_#fdc991,inset_-2px_-2px_5px_#fdc991] select-none">
     {learnTab.map((learn) => (
      <span
       key={learn}
       className="text-primary-600 hover:text-white hover:bg-primary px-2 py-2 rounded-full transition-all duration-300"
      >
       {learn}
      </span>
     ))}
    </div>
   </section>

   <section className="w-full overflow-hidden py-10">
  <div className="relative max-w-5xl mx-auto">
    <div className="flex items-end justify-center">
      {videoSVG.map((v, i) => (
        <img
          key={i}
          src={v.img}
          alt=""
          className={v.cls}
        />
      ))}
    </div>
  </div>
</section>

  </main>
 );
}

export default Opportunity;
