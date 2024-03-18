import React from "react";
import "./App.css";
import Tracks from "./components/Tracks/Tracks";
import Navbar from "./components/Navbar/Navbar";
// import Timeline from "./components/Timelines/Timeline.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Sponsors from "./components/Sponsors/Sponsors.jsx";
import Contact from "./components/Contact Us/Contactus.jsx";
import Faqs from "./components/FAQs/Faqs.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Tracks />
      {/* <Timeline /> */}
      <Sponsors />
      <Faqs/>
      <Contact />
    </div>
  );
}

export default App;
