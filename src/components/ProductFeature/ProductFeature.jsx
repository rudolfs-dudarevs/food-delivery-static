import React, { useEffect, useState } from "react";
import "./ProductFeature.scss";

const ProductFeature = ({ keepOrder, featureImage, preTitle, title, text }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (keepOrder && isDesktop) {
    return (
      <div className="product-feature">
        {/* Text on the left, image on the right */}

        <div className="feature-content">
          <h4 className="pre-title">{preTitle}</h4>
          <h3 className="title">{title}</h3>
          <p className="text">{text}</p>
        </div>
        <img src={featureImage} className="feature-image" alt="Feature Image" />
      </div>
    );
  }

  return (
    <div className="product-feature">
      {/* Image on the left, text on the right */}
      <img src={featureImage} className="feature-image" alt="Feature Image" />
      <div className="feature-content">
        <h4 className="pre-title">{preTitle}</h4>
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default ProductFeature;
