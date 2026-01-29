import React from "react";
import Buttons from "./oth/Buttons";

function StartNow() {
 return (
  <>
   <main class="p-12 bg-linear-60 from-[#25171c] to-[#19161c] text-white text-center">
    <img src="/images/Demat_img.webp" alt="" className="mx-auto w-2xs" />

    <p>Don't miss out on the ultimate destination for all your investments,</p>
    <h3 className="text-2xl font-bold">where your wealth knows no limits!</h3>
    <p className="my-4">Open your <span className="text-primary-600">Demat Account</span> in minutes!</p>
    <Buttons text={"Get Started Now"} px={2}/>
   </main>
  </>
 );
}

export default StartNow;
