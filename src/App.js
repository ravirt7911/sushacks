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
import Prizes from "./components/Prizes/Prizes.js";
import Tracks from "./components/Tracks/Tracks.js";

import Navbar from "./components/Navbar/Navbar.js";
// import Timeline from "./components/Timelines/Timeline.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Tracks />
      {/* <Timeline /> */}
      <Prizes />
      <Sponsors />
      <Contact />
    </div>
  );
>>>>>>> 51b670e4b01eab2421ba2fe15f801936547dbb4b
}

export default App;
