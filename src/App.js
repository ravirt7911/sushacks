import React from "react";
import "./App.css";
import About from "./Components/About/About";
import Sponsors from "./components/Sponsors/Sponsors.js";
import Contact from "./components/Contact Us/Contactus.js";
import Prizes from "./components/Prizes/Prizes.js";
import Navbar from "./components/Navbar/Navbar.js";
import Tracks from "./components/Tracks/Tracks.js";
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
}

export default App;
