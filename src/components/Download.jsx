import React from "react";

function Download() {
 return (
  <>
   <main className="mx-3 my-10 p-5 sm:p-8 rounded-3xl bg-linear-to-br from-orange-50 to-white border border-orange-100 shadow-xl space-y-5">
    <div className="flex items-center gap-3 text-2xl sm:text-3xl font-semibold">
     <img src="/hero/StokZ_Icon.svg" alt="StockZ" className="h-9 w-9" />
     <span>StockZ</span>
    </div>

    <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
     One <span className="text-primary-600">Platform</span> for All Your{" "}
     <span className="text-primary-600">Investments</span>
    </p>

    <p className="text-gray-600 text-sm sm:text-base">
     Fast, Secure, & Easy Trading at Your Fingertips
    </p>

    <button className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline">
     Know More →
    </button>

    <div className="flex gap-3 pt-2">
     <div className="bg-black p-4 rounded-2xl hover:scale-105 transition cursor-pointer shadow-lg">
      <img
       src="/images/Google_play_text.svg"
       alt="Get it on Google Play"
       className="h-6"
      />
     </div>

     <div className="bg-black p-4 rounded-2xl hover:scale-105 transition cursor-pointer shadow-lg">
      <img
       src="/images/App_store_text.svg"
       alt="Download on the App Store"
       className="h-6"
      />
     </div>
    </div>
   </main>
  </>
 );
}

export default Download;
