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

const tableCellStyle = {
  padding: 16,
  textAlign: "left",
  borderSpacing: 0,
  cellSpacing: 0,
  cellPadding: 0,
};

const tableHeaderStyle = {
  ...tableCellStyle,
  textAlign: "left",
};

const BuildDetails = () => {
  return (
    <div style={containerStyles}>
      <h3 style={titleStyles}>Build Details</h3>
      <table
        style={{
          alignSelf: "center",
          marginTop: "1em",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th
              style={{ ...tableHeaderStyle, textAlign: "left", width: "1em" }}
            >
              Order
            </th>
            <th
              style={{ ...tableHeaderStyle, textAlign: "left", width: "1.5em" }}
            >
              Framework
            </th>
            <th
              style={{
                ...tableHeaderStyle,
                textAlign: "left",
                width: "1.5em",
                paddingRight: "1.5em",
              }}
            >
              Version
            </th>
            <th
              style={{
                ...tableHeaderStyle,
                textAlign: "right",
                width: 100,
                backgroundColor: colors.primary,
                paddingTop: "1.5em",
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              }}
            >
              Build Time
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableCellStyle}>1</td>
            <td style={tableCellStyle}>React</td>
            <td style={tableCellStyle}>16.13.x</td>
            <td
              style={{
                ...tableCellStyle,
                backgroundColor: colors.primary,
                textAlign: "right",
              }}
            >
              ~2d
            </td>
          </tr>
          <tr>
            <td style={tableCellStyle}>2</td>
            <td style={tableCellStyle}>Vue</td>
            <td style={tableCellStyle}>2.6.x</td>
            <td
              style={{
                ...tableCellStyle,
                backgroundColor: colors.primary,
                textAlign: "right",
              }}
            >
              ~1d
            </td>
          </tr>
          <tr>
            <td style={tableCellStyle}>3</td>
            <td style={tableCellStyle}>Angular</td>
            <td style={tableCellStyle}>9.1.x</td>
            <td
              style={{
                ...tableCellStyle,
                backgroundColor: colors.primary,
                textAlign: "right",
              }}
            >
              &lt;1d
            </td>
          </tr>
          <tr>
            <td style={tableCellStyle}>4</td>
            <td style={tableCellStyle}>Ember</td>
            <td style={tableCellStyle}>3.18.x</td>
            <td
              style={{
                ...tableCellStyle,
                backgroundColor: colors.primary,
                textAlign: "right",
                paddingBottom: "1.5em",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            >
              ~2d
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BuildDetails;

// ### Build Details

// 1. React (v16.13.x)
// 2. Vue (v2.6.x)
// 3. Angular (v9.1.x)
// 4. Ember (3.18.x)

// ---

// ### Build Time

// - React (~2 days -- designing the app as I went)
// - Vue (~1 day)
// - Angular (<1 day)
// - Ember (~2 days)
