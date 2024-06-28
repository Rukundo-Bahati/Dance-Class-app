import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/nav/Nav";
import Footer from "./components/Footer";
import {
  Home,
  Contacts,
  Gallery,
  Class,
  Blog,
  Shop,
  Pricing,
  Events,
  About,
} from "./pages/all";
import "./App.css"; 
import SearchResults from "./pages/SearchResullts";
import { DataProvider } from "./data/DataContext";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen flex flex-col">
      {isLoading ? (
        <div className="flex items-center justify-center flex-grow">
          <span className="text-6xl font-bold text-transparent bg-clip-text animate-gradient">
            SPARK
          </span>
        </div>
      ) : (
        <DataProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/class" element={<Class />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/events" element={<Events />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
          <Footer />
        </Router>
        </DataProvider>
      )}
    </div>
  );
};

export default App;
