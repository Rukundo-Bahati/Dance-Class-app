import Card from "./Card";
import d1 from "../../assets/d1.webp";
import d2 from "../../assets/d3.webp";
import d3 from "../../assets/dance-bg.webp";

const Types = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 bg-violet-950 min-h-full p-4 md:p-6">
        <Card
          img={d1}
          header="Contemporary Dance"
          content="Authoritatively pursue multimedia based metrics before user-centric. Seamlessly drive flexible strategic theme."
        />
        <Card
          img={d2}
          header="Couple Dance Class"
          content="Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed."
        />
        <Card
          img={d3}
          header="Classical Dance Class"
          content="Curabitur aliquet quam id dui posuere blandit. Pellentesque ipsum orci porta dapibus. Donec rutrum malesuada."
          
        />
      </div>
    </div>
  );
};

export default Types;
