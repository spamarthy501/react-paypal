import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import AllProductsPage from './AllProductsPage';
import BabycarePage from './BabycarePage';
import SkincarePage from './SkincarePage';
import ShoppingCart from './ShoppingCart';
import CheckoutPage from './CheckoutPage';

function App() {

  // return (
  //     <div>
  //       <a href="/login">Login</a>
  //       <a href="/allproducts">AllProductsPage</a>
  //       <a href="/babycare">BabycarePage</a>
  //       <a href="/checkout">SkincarePage</a>
  //     </div>
  // );


  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/allproducts">
            <AllProductsPage />
          </Route>

          <Route path="/babycare">
            <BabycarePage />
          </Route>

          <Route path="/skincare">
            <SkincarePage />
          </Route>

          <Route path="/checkout">
            <CheckoutPage />
          </Route>

          {/* <Route path="/login" component={LoginPage} /></Route>
          <Route path="/allproducts" component={AllProductsPage} /></Route>
          <Route path="/babycare" component={BabycarePage} /></Route>
          <Route path="/skincare" component={SkincarePage} /></Route>
          <Route path="/cart" component={ShoppingCart} /></Route>
          <Route path="/checkout" component={CheckoutPage} /></Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
