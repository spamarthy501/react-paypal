import React from "react";
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
    Routes,
    Outlet
} from "react-router-dom";

import { users } from "./Redux/userDetails"

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import AllProductsPage from './AllProductsPage';
import BabycarePage from './BabycarePage';
import SkincarePage from './SkincarePage';
// import ShoppingCart from './ShoppingCart';
import CheckoutPage from './CheckoutPage';



// return (
//   <Router>
//     <div>
//       <Switch>
//         <Route path="/" exact>
//           <HomePage />
//         </Route>

//         <Route path="/login">
//           <LoginPage />
//         </Route>

//         <Route path="/register">
//           <RegisterPage />
//         </Route>

//         <Route path="/allproducts">
//           <AllProductsPage />
//         </Route>

//         <Route path="/babycare">
//           <BabycarePage />
//         </Route>

//         <Route path="/skincare">
//           <SkincarePage />
//         </Route>

//         <Route path="/checkout">
//           <CheckoutPage />
//         </Route>

//         {/* <Route path="/login" component={LoginPage} /></Route>
//         <Route path="/allproducts" component={AllProductsPage} /></Route>
//         <Route path="/babycare" component={BabycarePage} /></Route>
//         <Route path="/skincare" component={SkincarePage} /></Route>
//         <Route path="/cart" component={ShoppingCart} /></Route>
//         <Route path="/checkout" component={CheckoutPage} /></Route> */}
//       </Switch>
//     </div>
//   </Router>
// );

const usersJsonString = JSON.stringify(users);
localStorage.setItem('users', usersJsonString);

const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/allproducts" element={<AllProductsPage />} />
        <Route path="/babycare" element={<BabycarePage />} />
        <Route path="/skincare" element={<SkincarePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </>
    )
  );

function App() {
    return <RouterProvider router={router} />;
}

export default App;
