import Card from "./Card";
import d1 from "../../assets/d1.webp";
import d2 from "../../assets/d3.webp";
import d3 from "../../assets/dance-bg.webp";

const Type3 = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 bg-gray-300 min-h-full p-4 md:p-6">
        <Card
          img={d1}
          header="Hip-Hop Dance"
          content="Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Proin eget tortor tincidunt at risus."
        />
        <Card
          img={d2}
          header="Cardio Dance"
          content="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sit amet aliquam.."
        />
        <Card
          img={d3}
          header="Break Dance"
          content="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt quis ac velit lectus."
        />
      </div>
    </div>
  );
};

export default Type3;
