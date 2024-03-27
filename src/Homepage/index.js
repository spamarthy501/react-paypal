import React from 'react';
import HomeBanner from "./HomeBanner";
import Products from "./Products";
import Promotion from "./Promotion";
import BeautyBlog from './BeautyBlog';
import AboutUs from './AboutUs';
import SupportFeatures from './SupportFeatures';

function HomePage() {
    return (
        <div>
            <HomeBanner />
            <Products />
            <Promotion />
            <BeautyBlog />
            <AboutUs />
            <SupportFeatures />
        </div>
    );
  }
  
  export default HomePage;