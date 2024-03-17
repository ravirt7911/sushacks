import React from "react";
import "./App.css";

import Navbar from "./components/nav.jsx";
import Sponsers from "./components/sponsers/sponsers.jsx";

import Tracks from './pages/Tracks/Tracks'
import Navbar from "./components/Navbar/Navbar";
import Timeline from "./components/Timelines/Timeline";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Sponsers/>

      <Tracks/>
      <Timeline />

    </div>
  );
}

export default App;
