import React from "react";

import reactLogo from "../static/react.svg";
import vueLogo from "../static/vue.svg";
import angularLogo from "../static/angular.svg";
import emberLogo from "../static/ember.svg";
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
  alignItems: "center",
};

const ThoughtList = ({ thoughts, title }) => {
  return (
    <div style={{ padding: 24, width: "60vh" }}>
      <h4 style={{ color: colors.highlightText }}>{title}</h4>
      <ul>
        {thoughts.map((thought) => (
          <li style={{ paddingTop: 8, paddingBottom: 8 }}>{thought}</li>
        ))}
      </ul>
    </div>
  );
};

const Default = ({ framework, pros, cons }) => {
  return (
    <div style={containerStyles}>
      <img src={determineLogo(framework)} style={{ width: 200 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ThoughtList thoughts={pros} title="Pros" />
        <ThoughtList thoughts={cons} title="Cons" />
      </div>
    </div>
  );
};

function determineLogo(framework) {
  switch (framework) {
    case "ember":
      return emberLogo;
    case "angular":
      return angularLogo;
    case "vue":
      return vueLogo;
    case "react":
    default:
      return reactLogo;
  }
}

export default Default;
