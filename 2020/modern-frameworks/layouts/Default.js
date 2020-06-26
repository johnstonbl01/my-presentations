import React from "react";

import * as colors from "../colors";

const containerStyles = {
  width: "100vw",
  height: "100vh",
  backgroundColor: "white",
  color: colors.text,
  padding: "3em",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const titleStyles = {
  color: colors.defaultTitle,
  fontSize: "3em",
  marginTop: 0,
  marginBottom: "0.25em",
};

const Default = ({ title, children }) => {
  return (
    <div style={containerStyles}>
      <h3 style={titleStyles}>{title}</h3>
      {children}
    </div>
  );
};

export default Default;
