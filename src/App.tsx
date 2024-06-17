import Community from "./components/Community";
import Services from "./components/services/Services";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Style from "./components/Style";

const App = () => {
  return (
    <div>
      
<div role="status" className="max-w-sm animate-pulse">
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span className="sr-only">Loading...</span>
</div>


      <Nav />
      <Header />
      <Cards />
      <Community />
      <Services />
      <Style />
    </div>
  );
};

export default App;
