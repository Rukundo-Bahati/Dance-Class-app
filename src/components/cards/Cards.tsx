import Card from "./Card";
import d1 from '../../assets/d1.jpg'
import d2 from '../../assets/d3.jpg'
import d3 from '../../assets/dance-bg.jpg'

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-4 bg-blue-950">
      <Card
      img={d1}
        header="Join Our Dance Class"
        content="Intrinsically predominate perfomance based total linkage"
      />
      <Card   img={d2}
        header="Dance Coreography"
        content="Intrinsically predominate perfomance based total linkage"
      />
      <Card
         img={d3}
        header="Perfomance"
        content="Intrinsically predominate perfomance based total linkage"
      />
    </div>
  );
};

export default Cards;