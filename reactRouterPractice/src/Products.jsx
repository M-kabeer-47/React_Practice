import { useParams } from "react-router-dom";
import Product from "./Product"; // Assuming the correct path

const electronic = [
  { name: "iPhone 15 pro max", price: "$2500" },
  { name: "Hp EliteBook 840 g6", price: "$500" },
  { name: "Phillips Iron T6", price: "$340" },
];

const kitchen = [
  { name: 'Cutting Board', price: "9.99" },
  { name: 'Knife Set', price: "$29.99" },
  { name: 'Mixing Bowls', price: "$19.99" },
];

const food = [
  { name: 'Pizza', price: "$12.99" },
  { name: 'Burger', price: "$8.49"},
  { name: 'Salad', price: "$6.99"},
];

export default function Products() {
  const { category } = useParams();
//   const products = displayProducts(category);
console.log(category);
let products = [];
  switch (category){
    case "electronic":
        products = electronic;
        break;
        case "kitchen":
            products = kitchen;
            break;
            case "food":
        products = food;
        break;
    
  }

  return (
    <div className="products">
      {products.map((product) => (  // Ensure products is an array
        <Product
          key={product.name}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

