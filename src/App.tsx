import React, { useState, useEffect } from "react";
import Community from "./components/Community";
import Services from "./components/services/Services";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Style from "./components/Style";
import Testimonials from "./components/testimonial/Testimonials";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Nav />
          <Header />
          <Cards />
          <Community />
          <Services />
          <Style />
          <Testimonials />
        </>
      )}
    </div>
  );
};

export default App;
