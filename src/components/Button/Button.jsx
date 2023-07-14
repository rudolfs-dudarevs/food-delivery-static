import React from "react";
import "./Button.scss";

const Button = ({ text, isPrimary, type }) => {
  return (
    <div className="button-container">
      <button
        className={isPrimary ? "btn-primary" : "btn-secondary"}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
