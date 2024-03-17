

import React from "react";
import "./App.css";
<<<<<<< HEAD
import About from "./Components/About/About";

function App() {
    return (
        <div className="App">
            Testing sus hackkkkkkkkkkkkk
            <About />
        </div>
    );
=======
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
>>>>>>> 51b670e4b01eab2421ba2fe15f801936547dbb4b
}

export default App;
