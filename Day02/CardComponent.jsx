// CardComponent.jsx
import React from "react";
import PropTypes from "prop-types";
import "./CardComponent.css"; // Optional styling

const CardComponent = ({ title, content, footer }) => {
  const isDefaultTitle = CardComponent.defaultProps.title;
  const isDefaultContent = CardComponent.defaultProps.content;
  const isDefaultFooter = CardComponent.defaultProps.footer;

  return (
    <div className="card-container">
      <h2 className="card-title">{title ? title : isDefaultTitle}</h2>
      <p className="card-content">{content ? content : isDefaultContent}</p>
      <div className="card-footer">{footer ? footer : isDefaultFooter}</div>
    </div>
  );
};

// Default props
CardComponent.defaultProps = {
  title: "Default Title",
  content: "This is default content.",
  footer: "Default Footer",
};

// Prop types
CardComponent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  footer: PropTypes.string,
};

export default CardComponent;
