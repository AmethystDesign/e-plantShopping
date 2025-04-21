
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import { Helmet } from "react-helmet";
import { companyInfo } from "./index"; // adjust path as needed

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <>
      <Helmet>
        <title>{companyInfo.name}</title>
        <link rel="icon" type="image/svg+xml" href={companyInfo.logo} />
        <meta name="keywords" content="Vite, React, plants, gardening, Air Purifying Plants, Aromatic Fragrant Plants, Insect Repellent Plants, Medicinal Plants, Low Maintenance Plants" />
      </Helmet>
      <div className="app-container">
        <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <img src="/logo-VerantVibe-w.svg" height={200} width={203} alt="" />
              <h1>Welcome To Verdant Vibe</h1>
              <div className="divider"></div>
              <p>Where Tranquility Takes Root</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs/>
            </div>
          </div>
        </div>
        <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default App;



