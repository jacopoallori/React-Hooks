import Navbar from "./components/NavBar";
import Cart from "./components/Cart";
import TotalBox from "./components/TotalBox";
import Loading from "./components/Loading";
import './cart.css';

function AppCart() {
  return <div className="App">
    <Navbar/>
    <Cart/>
    <TotalBox/>
    <Loading/>
  </div>;
}

export default AppCart;