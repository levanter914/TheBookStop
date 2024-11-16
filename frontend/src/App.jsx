import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
//import Preloader from "./components/Preloader"; // Import the Preloader component


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Simulate the end of the loading phase
    }, 3000); // Adjust this timeout to simulate the duration of your content loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="bg-[#f1e6dc]">
       
            <Navbar />
            <ScrollToTop />
            <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-4 font-primary">
              <Outlet />
            </main>
            <Footer />
          
        
      </div>
    </>
  );
}

export default App;