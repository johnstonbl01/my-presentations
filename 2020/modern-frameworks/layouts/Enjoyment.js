import React from "react";

import reactLogo from "../static/react.svg";
import vueLogo from "../static/vue.svg";
import angularLogo from "../static/angular.svg";
import emberLogo from "../static/ember.svg";
import heartIcon from "../static/heart-solid.svg";
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

const Enjoyment = () => {
  return (
    <div style={containerStyles}>
      <h3 style={titleStyles}>Enjoyment</h3>
      <table style={{ margin: "0 auto" }}>
        <tbody>
          <tr>
            <td
              style={{
                paddingRight: 32,
                paddingTop: 16,
                paddingBottom: 16,
                textAlign: "center",
              }}
            >
              <img style={{ width: 180 }} src={reactLogo} />
            </td>
            <td>
              <img style={{ width: 100, margin: "0 8px" }} src={heartIcon} />
              <img style={{ width: 100, margin: "0 8px" }} src={heartIcon} />
              <img style={{ width: 100, margin: "0 8px" }} src={heartIcon} />
              <img style={{ width: 100, margin: "0 8px" }} src={heartIcon} />
            </td>
          </tr>

          <tr>
            <td
              style={{
                paddingRight: 32,
                paddingTop: 16,
                paddingBottom: 16,
                textAlign: "center",
              }}
            >
              <img style={{ width: 180 }} src={vueLogo} />
            </td>
            <td>
              <img style={{ width: 100, margin: "0 8px" }} src={heartIcon} />
              <img style={{ width: 100, margin: "0 8px" }} src={heartIcon} />
              <img style={{ width: 100, margin: "0 8px" }} src={heartIcon} />
            </td>
          </tr>

          <tr>
            <td
              style={{
                paddingRight: 32,
                paddingTop: 16,
                paddingBottom: 16,
                textAlign: "center",
              }}
            >
              <img style={{ width: 160 }} src={angularLogo} />
            </td>
            <td>
              <img style={{ width: 100, margin: "0 8px" }} src={heartIcon} />
              <img style={{ width: 100, margin: "0 8px" }} src={heartIcon} />
              <img style={{ width: 100, margin: "0 8px" }} src={heartIcon} />
            </td>
          </tr>

          <tr>
            <td
              style={{
                paddingRight: 32,
                paddingTop: 16,
                paddingBottom: 16,
                textAlign: "center",
              }}
            >
              <img style={{ width: 180 }} src={emberLogo} />
            </td>
            <td>
              <img style={{ width: 100, margin: "0 8px" }} src={heartIcon} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Enjoyment;
