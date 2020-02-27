import React from "react";
import PropTypes from "prop-types";

const PillBadge = ({ color, children, className }) => (
  <span className={`pill-badge pill-badge--${color} ${className}`}>
    {children}
  </span>
);

PillBadge.propTypes = {
  /** Badge color string */
  color: PropTypes.oneOf([
    "green",
    "red",
    "blue",
    "purple",
    "orange",
    "yellow",
    "brown",
    "white"
  ]),
  /** React children */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string
  ]),
  /** SCSS className string */
  className: PropTypes.string
};

PillBadge.defaultProps = {
  color: "blue",
  children: "Badge text",
  className: ""
};

export default PillBadge;
