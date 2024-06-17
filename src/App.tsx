import Community from "./components/Community";
import Services from "./components/services/Services";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Cards />
      <Community />
      <Services />
    </div>
  );
};

export default App;
