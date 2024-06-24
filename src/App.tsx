import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Community from "./components/Community";
import Services from "./components/services/Services";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Style from "./components/Style";
import Testimonials from "./components/testimonial/Testimonials";
import Instructors from "./components/teachers/Instructors";
import Articles from "./components/articles/Articles";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import Class from "./pages/classes/Class";
import Blog from "./pages/blog/Blog";
import Contacts from "./pages/contact/Contact";
import Contact from './components/Contact'
import Shop from "./pages/shop/Shop";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
  }, [isLoading]);

  return (
    <div className="bg-slate-950">
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
        <Router>
            <Nav />
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Cards />
                <Community />
                <Services />
                <Style />
                <Testimonials />
                <Instructors />
                <Contact />
                <Articles />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/class" element={<Class />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
            <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
