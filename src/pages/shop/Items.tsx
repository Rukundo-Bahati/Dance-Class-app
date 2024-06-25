import Item from "./Item";

const Items = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
      <Item
        name="White Nike Fitted Cap"
        img="src/assets/cap.jpg"
        price="$1,300.00"
        description="The Black Nike Fitted Cap is a sleek and stylish accessory designed for both comfort and performance. Made from high-quality, breathable materials, this cap features Nike's signature."
      />
      <Item
        name="Handbag Tote Bag"
        img="src/assets/bag.jpg"
        price="$1,700.00"
        description="Discover elegance and functionality with our Women's Handbag Tote Bag. Crafted from premium materials, this versatile tote bag features a spacious interior, perfect for carrying your essentials with ease. "
      />
      <Item
        name="Ivory Shoes"
        img="src/assets/shoes.jpg"
        price="$1,200.00"
        description=" Elegant and timeless, these Women's Ivory Shoes are perfect for any special occasion. Crafted with a sleek design, they feature a comfortable fit and a classic ivory hue that complements a variety of outfits."
      />
      <Item
        name="Air Force 1"
        img="src/assets/force.jpg"
        price="$2000.00"
        description="Introducing the timeless Air Force 1 in a striking blue and white colorway. Crafted with premium materials and iconic design, these shoes boast both style and comfort. Elevate your streetwear game with these versatile sneakers, perfect for any casual occasion."
      />
      <Item
        name="Dark Dress"
        img="src/assets/dress.jpg"
        price="$3000.00"
        description="The deep, rich hue exudes sophistication, making it perfect for both formal occasions and chic evening outings. With subtle detailing and a refined cut, this dress combines comfort and style effortlessly, ensuring you look and feel your best."
      />
      <Item
        name="T-Shirt"
        img="src/assets/t.jpg"
        price="$1000.00"
        description="This classic men's gray T-shirt is made from a soft and breathable cotton blend, ensuring all-day comfort and durability. The versatile gray color makes it a perfect addition to any wardrobe, easily pairing with jeans, shorts, or under a jacket for a layered look"
      />
      <Item
        name="T-Shirt Dress Skirt"
        img="src/assets/dress-skirt.jpg"
        price="$3000.00"
        description="This fashionable women's skirt is a must-have for your wardrobe. Crafted from premium fabric, it offers a perfect blend of style and comfort with its trendy design and comfortable fit, making it ideal for both casual and formal settings"
      />

      <Item
        name="Men Hip Hop Varese"
        img="src/assets/varese.jpg"
        price="$1500.00"
        description=" Men Hip Hop Varese is a trendy and stylish apparel item perfect for those who want to embrace the urban hip hop culture. Featuring bold designs and comfortable materials, this piece ensures you stand out in any crowd while enjoying maximum comfort."
      />

      <Item
        name="Black Fime"
        img="src/assets/glass.jpg"
        price="$1500.00"
        description="These sleek, black sunglasses are designed for the modern man who values style and functionality. Featuring a durable frame and UV-protected lenses, they provide both comfort and protection, making them the perfect accessory for any outdoor occasion"
      />

      <Item
        name="Modern Pant"
        img="src/assets/pant.jpg"
        price="$1700.00"
        description="Tailored for contemporary comfort and sophistication, these pants blend form and function seamlessly. Perfect for both casual and formal occasions, they offer versatility and effortless style."
      />

      <Item
        name="Red & white "
        img="src/assets/shoe2.jpg"
        price="$1900.00"
        description="These vibrant and trendy shoes are perfect for making a statement while keeping your feet comfortable all day long. Featuring a sleek design with bold red and white accents, these shoes are sure to turn heads wherever you go. Elevate your footwear collection with this must-have pair"
      />

      <Item name="Colored Scarf" img="src/assets/scarf.jpg" price="$800.00" description="The Colored Scarf is a versatile accessory that adds a pop of color to any outfit. Made from soft and cozy materials, it provides warmth during chilly days while also adding style and flair."/>
    </div>
  );
};

export default Items;
