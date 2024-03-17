

import React from "react";
import "./App.css";
import Sponsors from "./components/Sponsors/Sponsors.js";
import Contact from "./components/Contact Us/Contactus.js";

import Tracks from "./components/Tracks/Tracks";

import Navbar from "./components/Navbar/Navbar";
import Timeline from "./components/Timelines/Timeline";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Tracks />
      <Timeline />
      <Sponsors />
      <Contact />
    </div>
  );
}

export default App;
