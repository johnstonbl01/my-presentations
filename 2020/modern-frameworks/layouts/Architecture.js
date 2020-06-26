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

const Architecture = ({ src }) => {
  return (
    <div style={containerStyles}>
      <img style={{ width: "100%" }} src={src} />
    </div>
  );
};

export default Architecture;
