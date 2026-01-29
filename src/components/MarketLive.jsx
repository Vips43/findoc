import React from "react";
import { marketLive } from "./oth/oth";

function MarketLive() {
 function time() {
  const date = new Date();
  return `${date.toDateString()} | ${date.toLocaleTimeString()} Hrs IST`;
 }
 return (
  <>
   <main className="max-w-xl mx-3 sm:mx-auto p-5 sm:p-6 space-y-4 shadow-xl border border-gray-200 my-8 rounded-2xl bg-white">
    {marketLive.map((m) => (
     <div className="flex justify-between items-start border-b border-gray-300 py-4 last:border-b-0">
      <div className="grid gap-1">
       <span className="uppercase text-xs font-semibold text-primary tracking-wide">
        {m.title}
       </span>

       {m.desc && <span className="text-[0.7rem] text-gray-400">{time()}</span>}

       <span className="text-sm text-gray-700">{m.desc}</span>

       <span className="uppercase text-[0.65rem] text-gray-400 tracking-wide">
        {m.share}
       </span>

       <span className="text-2xl font-semibold text-gray-900">{m.value}</span>

       {m.year && m.tYear ? (
        <div className="flex gap-6 mt-1">
         <p className="text-[0.7rem] text-gray-500">
          <span
           className={`${m.year < 0 ? "text-red-500" : "text-green-600"} text-sm font-medium`}
          >
           {m.year}
          </span>{" "}
          1Y Return
         </p>

         <p className="text-[0.7rem] text-gray-500">
          <span
           className={`${m.tYear < 0 ? "text-red-500" : "text-green-600"} text-sm font-medium`}
          >
           {m.tYear}
          </span>{" "}
          3Y Return
         </p>
        </div>
       ) : (
        ""
       )}
      </div>
      <div className="flex flex-col items-end text-sm font-medium">
       <span
        className={`px-2 py-0.5 rounded-full text-xs ${
         m.dec < 0 ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
        }`}
       >
        {m.dec}
       </span>

       {m.perc && (
        <span
         className={`mt-1 px-2 py-0.5 rounded-full text-xs ${
          m.perc < 0 ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
         }`}
        >
         {m.perc}%
        </span>
       )}
      </div>
     </div>
    ))}
   </main>
  </>
 );
}

export default MarketLive;
