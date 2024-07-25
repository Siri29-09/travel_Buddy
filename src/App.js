import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Stay from './components/Stay'
import Destinations from "./components/Destinations";
import Booking from "./components/Booking";
import Explore from "./components/Explore";
import Review from "./components/Review";
import Last from "./components/Last";


function App() {
  return (
    <div >
    <Navbar />
    <Hero />
    <Service />
    <Stay />
    <Destinations />
    <Booking />
    <Explore />
    <Review />
    <Last />
 
    </div>
  );
}

export default App;
