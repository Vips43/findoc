import React from "react";
import { FinancialJIcons } from "./oth/oth";
import Buttons from "./oth/Buttons";

function FinaJourney() {
 return (
  <>
   <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-10">
     Innovative Solutions For Your{" "}
     <span className="text-primary">Financial Journey</span>
    </h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
     <img
      src="/images/algo.webp"
      alt="Algo Trading"
      className="w-65 sm:w-85 lg:w-105 mx-auto drop-shadow-xl"
     />

     <div className="mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold my-4">
       <span className="text-primary">Algo</span> Trading
      </h2>
      <p className="text-gray-600 leading-relaxed max-w-xl">
       A rapidly emerging technology for traders. It uses optimized algorithms
       to enable rapid trades, for beyond manual capabilities. In the stock
       market, where every microsecond counts, the speed and efficiency of Algo
       trading ore crucial for investors.
      </p>
      <section className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-2 max-w-xl">

       {FinancialJIcons.map((icon) => (
        <div
         key={icon.title}
         className="group grid place-items-center gap-2 w-26 p-2"
        >
         <img src={icon.img} alt="" />
         <p
          className={`bg-primary h-0.75 rounded-2xl w-10 transition-all group-hover:scale-x-150`}
         ></p>
         <span className="whitespace-nowrap">{icon.title}</span>
        </div>
       ))}
      </section>
      <div className="text-center md:text-left">
       <Buttons
        text={"Show More"}
        variant="outlined"
        bgClr="white"
        color="black"
        border={"1px solid #fe9447"}
        px={3}
       />
      </div>
     </div>
    </div>
   </main>
  </>
 );
}

export default FinaJourney;
