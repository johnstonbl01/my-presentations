import React from "react";

import reactTimeline from "../static/react-timeline.png";
import vueTimeline from "../static/vue-timeline.png";
import angularTimeline from "../static/angular-timeline.png";
import emberTimeline from "../static/ember-timeline.png";
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
};

const titleStyles = {
  color: colors.defaultTitle,
  fontSize: "3em",
  marginTop: 0,
  marginBottom: "0.25em",
};

const rowStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  margin: "0.5em 0",
};

const Timelines = () => {
  return (
    <div style={containerStyles}>
      <h3 style={titleStyles}>Perf Timelines</h3>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={rowStyles}>
          <img src={vueLogo} style={{ width: 100, marginRight: "1em" }} />
          <img src={vueTimeline} style={{ width: "70%" }} />
        </div>

        <div style={rowStyles}>
          <img src={reactLogo} style={{ width: 100, marginRight: "1em" }} />
          <img src={reactTimeline} style={{ width: "70%" }} />
        </div>

        <div style={rowStyles}>
          <img src={emberLogo} style={{ width: 100, marginRight: "1em" }} />
          <img src={emberTimeline} style={{ width: "70%" }} />
        </div>

        <div style={rowStyles}>
          <img src={angularLogo} style={{ width: 100, marginRight: "1em" }} />
          <img src={angularTimeline} style={{ width: "70%" }} />
        </div>
      </div>
    </div>
  );
};

export default Timelines;
