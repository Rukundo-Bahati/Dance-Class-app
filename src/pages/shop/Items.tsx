import Item from "./Item";

const Items = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
      <Item
        name="Black Nike Fitted Cap"
        img="src/assets/cap.jpg"
        price="$1,300.00"
      />
      <Item
        name="Handbag Tote Bag"
        img="src/assets/bag.jpg"
        price="$1,700.00"
      />
      <Item name="Ivory Shoes" img="src/assets/shoes.jpg" price="$1,200.00" />
      <Item name="Air Force 1" img="src/assets/force.jpg" price="$2000.00" />
      <Item name="Dark Dress" img="src/assets/dress.jpg" price="$3000.00" />
      <Item name="T-Shirt" img="src/assets/t.jpg" price="$1000.00" />
      <Item
        name="T-Shirt Dress Skirt"
        img="src/assets/dress-skirt.jpg"
        price="$3000.00"
      />
      <Item
        name="Men Hip Hop Varese"
        img="src/assets/varese.jpg"
        price="$1500.00"
      />
      <Item name="Black Fime" img="src/assets/glass.jpg" price="$1500.00" />
      <Item name="Modern Pant" img="src/assets/pant.jpg" price="$1700.00" />
      <Item name="Red & white" img="src/assets/shoe2.jpg" price="$1900.00" />
      <Item name="Red & white" img="src/assets/scarf.jpg" price="$800.00" />
    </div>
  );
};

export default Items;
