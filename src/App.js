import React, { useState, useEffect, useRef } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
  const [load, upadateLoad] = useState(true);
  
  
  
  
    const tawkMessengerRef = useRef();

    const handleMinimize () => {
        tawkMessengerRef.current.minimize();
    };
  
      return (
        <div className="App">
            <button onClick={handleMinimize}> Minimize the Chat </button>

            <TawkMessengerReact
                propertyId="property_id"
                widgetId="default"
                useRef={tawkMessengerRef}/>
        </div>
    );
  
  


  
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
            
            
            
         
                const onLoad = () => {
        console.log('onLoad works!');
    };
            
                return (
        <div className="App">
            <TawkMessengerReact
                propertyId="property_id"
                widgetId="default"
                onLoad={onLoad}/>
        </div>
    );
            
            
            


            
            
      </div>
    </Router>
  );
}

export default App;
