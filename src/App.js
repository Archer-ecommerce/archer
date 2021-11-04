import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import NavBar from "./components/Nav/NavBar";
import { PresentacionDelIndex } from "./components/Home/PresentacionDelIndex";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetails/ItemDetailContainer";
import CardContainer from "./components/Cart/CardContainer";
import Footer from "./components/Footer/Footer";
import { PurchaseForm } from "./components/Cart/PurchaseForm";

//Context
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <PresentacionDelIndex />
            <ItemListContainer />
          </Route>

          <Route exact path="/category/all">
            <ItemListContainer />
          </Route>

          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>

          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>

          <Route exact path="/cart">
            <CardContainer />
          </Route>

          <Route exact path="/form">
            <PurchaseForm />
          </Route>
        </Switch>
      </CartProvider>
      <Footer />
    </Router>
  );
}

export default App;
