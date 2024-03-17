import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Timeline from "./Timelines/Timeline";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Timeline />
    </div>
  );
}

export default App;
