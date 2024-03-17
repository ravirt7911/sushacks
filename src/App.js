import React from "react";
import "./App.css";
import Tracks from './pages/Tracks/Tracks'
import Navbar from "./components/Navbar/Navbar";
import Timeline from "./components/Timelines/Timeline";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Tracks/>
      <Timeline />
    </div>
  );
}

export default App;
