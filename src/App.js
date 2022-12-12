import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Cart";
import Header from "./Header";
import Home from "./Home";
import Items from "./Items";

function App() {
  // const [cartArray, setCartArray] = useState([]);

  // const changeCart = (id) => {
  //   console.log("Id received in App and about to add in cart - " + id);
  //   setCartArray([...cartArray, id]);
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
