import React from "react";

import * as colors from "../colors";

const styles = {
  width: "100vw",
  height: "100vh",
  backgroundColor: colors.background,
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "3em",
};

const Title = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

export default Title;
