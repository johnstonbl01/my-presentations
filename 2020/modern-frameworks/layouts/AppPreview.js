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
  marginBottom: "-0.25em",
};

const listItemStyles = {
  margin: "0.3em 0",
  fontSize: "0.8em",
};

const Default = () => {
  return (
    <div style={containerStyles}>
      <h3 style={titleStyles}>The App</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ paddingRight: "2em", flexShrink: 1 }}>
          <h2>GitHub Repos</h2>
          <ul>
            <li style={listItemStyles}>
              <strong style={{ color: "#5dd39e" }}>Ember: </strong>
              /johnstonbl01/game-shop-ember
            </li>
            <li style={listItemStyles}>
              <strong style={{ color: "#5dd39e" }}>React: </strong>
              /johnstonbl01/game-shop-react
            </li>
            <li style={listItemStyles}>
              <strong style={{ color: "#5dd39e" }}>Vue: </strong>
              /johnstonbl01/game-shop-vue
            </li>
            <li style={listItemStyles}>
              <strong style={{ color: "#5dd39e" }}>Angular: </strong>
              /johnstonbl01/game-shop-angular
            </li>
          </ul>

          <h2>Deployed Apps</h2>
          <ul>
            <li style={listItemStyles}>
              <strong style={{ color: "#5dd39e" }}>Ember: </strong>
              game-shop-ember.netlify.app
            </li>
            <li style={listItemStyles}>
              <strong style={{ color: "#5dd39e" }}>React: </strong>
              game-shop-react.netlify.app
            </li>
            <li style={listItemStyles}>
              <strong style={{ color: "#5dd39e" }}>Vue: </strong>
              game-shop-vue.netlify.app
            </li>
            <li style={listItemStyles}>
              <strong style={{ color: "#5dd39e" }}>Angular: </strong>
              game-shop-angular.netlify.app
            </li>
          </ul>
        </div>

        <video autoPlay loop width="400px">
          <source
            src="https://res.cloudinary.com/johnstonbl01/video/upload/v1592965840/game-shop-app_sfwp15.mp4"
            type="video/mp4"
          />
          {/* <source src={videoPath} type="video/mp4" /> */}
        </video>
      </div>
    </div>
  );
};

export default Default;
