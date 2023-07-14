import React from "react";
import "./HowAppWorks.scss";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import ProductFeature from "../ProductFeature/ProductFeature";
import Feature1 from "../../assets/feature-1.png";
import Feature2 from "../../assets/feature-2.png";
import Feature3 from "../../assets/feature-3.png";

const HowAppWorks = () => {
  return (
    <div className="how-app-works">
      <ProductDisplay />

      <h2 className="section-title">How the app works</h2>

      <ProductFeature
        featureImage={Feature1}
        preTitle="Create an account"
        title="Create/login to an existing account to get started"
        text="An account is created with your email and a desired password"
        keepOrder={false}
      />
      <ProductFeature
        featureImage={Feature2}
        preTitle="Explore varieties"
        title="Shop for your favorites meal as e dey hot."
        text="Shop for your favorite meals or drinks and enjoy while doing it."
        keepOrder={true}
      />
      <ProductFeature
        featureImage={Feature3}
        preTitle="Checkout"
        title="When you done check out and get it delivered."
        text="When you done check out and get it delivered with ease."
        keepOrder={false}
      />
    </div>
  );
};

export default HowAppWorks;
