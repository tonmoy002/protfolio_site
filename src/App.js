import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Experience/>
      <Skills/>
      <Work/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
