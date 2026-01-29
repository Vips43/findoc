import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FinaJourney from "./components/FinaJourney";
import MarketLive from "./components/MarketLive";
import Download from "./components/Download";
import Opportunity from "./components/Opportunity";

function App() {
 return (
  <>
   <main className="w-full">
    <div className="sticky top-0 z-999">
     <Navbar />
    </div>
    <HeroSection />
    <FinaJourney />
    <MarketLive/>
    <Download />
    <Opportunity />
   </main>
  </>
 );
}

export default App;
