import Card from "./Card";
import d1 from "../../assets/d1.webp";
import d2 from "../../assets/d3.webp";
import d3 from "../../assets/dance-bg.webp";

const Type2 = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4  min-h-full p-4 md:p-6">
        <Card
          img={d1}
          header="Kid’s Ballet"
          content="Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. aliquet felis volutpat."
        />
        <Card
          img={d2}
          header="Couple Ballet"
          content="Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Quisque velit id enim."
        />
        <Card
          img={d3}
          header="Classic Ballet"
          content="Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id at sem."
        />
      </div>
    </div>
  );
};

export default Type2;
