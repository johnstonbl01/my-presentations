import React from "react";

import * as colors from "../colors";

const styles = {
  width: "100vw",
  height: "100vh",
  backgroundColor: colors.highlightBackground,
  color: colors.highlightText,
  display: "flex",
  alignItems: "center",
  padding: "3em",
};

const Highlight = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

export default Highlight;
