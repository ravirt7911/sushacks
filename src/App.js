import React from "react";
import "./App.css";
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
}

export default App;
