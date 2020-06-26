import React from "react";

import * as colors from "../colors";

const styles = {
  width: "100vw",
  height: "100vh",
  backgroundColor: colors.background,
  color: colors.highlightText,
  display: "flex",
  alignItems: "center",
  padding: "3em",
};

const Attention = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

export default Attention;
