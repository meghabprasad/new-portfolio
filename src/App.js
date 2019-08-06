import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import Experiences from "./Components/Experiences";
import Contact from "./Components/Contact";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home
          title="Home Page"
          dark={true}
          id="section1"
        />
        <About
          dark={false}
          id="section2"
        />
        <Skills
          dark={true}
          id="section3"
        />
        <Projects
          title="Projects"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Experiences 
          title="Experiences"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
        <Contact
          title="Contact"
          subtitle={dummyText}
          dark={false}
          id="section6"
        />
      </div>
    );
  }
}

export default App;
