import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FinaJourney from "./components/FinaJourney";
import MarketLive from "./components/MarketLive";
import Download from "./components/Download";
import Opportunity from "./components/Opportunity";
import StartNow from "./components/StartNow";
import Footer from "./components/footer/Footer";

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
    <StartNow />

    <Footer />
   </main>
  </>
 );
}

export default App;
