import React from "react";
import "./App.css";
<<<<<<< HEAD
import About from "./Components/About/About";
import Sponsors from "./Components/Sponsors/Sponsors.js";
import Contact from "./Components/Contact Us/Contactus.js";
import Prizes from "./Components/Prizes/Prizes.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Tracks from "./Components/Tracks/Tracks.js";
//import Timeline from "./components/Timelines/Timeline.js";

function App() {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Tracks />
            {/* <Timeline /> */}
            <Prizes />
            <Sponsors />
            <Contact />
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
>>>>>>> 8a3272b3a1711c0f729184821d745555d181cf8a
}

export default App;
