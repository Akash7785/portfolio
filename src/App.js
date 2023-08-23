import About from "./Components/about/About";
import Contact from "./Components/contacct/Contact";
import Introd from "./Components/intro/Introd";
import ProductList from "./Components/productList/ProductList";

function App() {
  return (
    <div className="container">
      <Introd />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
