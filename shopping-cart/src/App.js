import "./App.css";
import { useState, useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import alanBtn from "@alan-ai/alan-sdk-web";
import { itemsMock } from "./mockData";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";

function App() {
  const [products, setProducts] = useState(itemsMock);
  const [cartItems, setCartItems] = useState([]);
  const [input, setInput] = useState("");

  //adding items to the cart
  const addItems = (product) => {
    console.log(product);
    setCartItems([...cartItems, product]);
  };

  //integrating Alan Ai into the project
  useEffect(() => {
    alanBtn({
      key: "60f39382af5b00dc076a72f0ba54f7832e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        setInput(commandData.data);
      },
    });
  }, []);

  //creating a new use effect hook
  useEffect(() => {
    addItems(
      products.filter((product) => {
        if (product.name.toLowerCase() === input) {
          return { ...product };
        }
      })[0]
    );
  }, [input]);
  return (
    <div className="container">
      <h1>Avaliable Products</h1>

      {/* mapping through all the items in the array  */}
      <div className="items">
        {products.map((product) => {
          return (
            <div className="product-item">
              <ProductList product={product} addItems={addItems} />
            </div>
          );
        })}
      </div>

      {/* cart section */}
      {cartItems.length > 0 && (
        <h1 className="header2">
          Cart <BsCart4 className="icon" />
        </h1>
      )}
      <div className="items2">
        {cartItems.length > 0 &&
          cartItems.map((unit) => {
            return (
              <>
                {unit && (
                  <div className="product-item">
                    <CartList unit={unit} />
                  </div>
                )}
              </>
            );
          })}
      </div>
    </div>
  );
}

export default App;
