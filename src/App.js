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

import Header from './Header';
import Footer from './Footer';
import HomePage from './Homepage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import CategoryPage from "./CategoryPage";
// import AllProductsPage from './AllProductsPage';
// import BabycarePage from './BabycarePage';
// import SkincarePage from './SkincarePage';
// import ShoppingCart from './ShoppingCart';
// import CheckoutPage from './CheckoutPage';

const usersJsonString = JSON.stringify(users);
localStorage.setItem('users', usersJsonString);

function Layout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="product/category/:id" element={<CategoryPage />} />
            {/* <Route path="/babycare" element={<BabycarePage />} />
            <Route path="/skincare" element={<SkincarePage />} />
            <Route path="/checkout" element={<CheckoutPage />} /> */}
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
