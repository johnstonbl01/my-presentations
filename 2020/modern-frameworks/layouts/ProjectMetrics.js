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

const ProjectMetrics = () => {
  return (
    <div style={containerStyles}>
      <h3 style={titleStyles}>Project Metrics</h3>
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
              style={{
                ...tableHeaderStyle,
                textAlign: "left",
                width: "1.5em",
                paddingTop: "1.5em",
                paddingRight: "1.5em",
              }}
            >
              Framework
            </th>
            <th
              style={{
                ...tableHeaderStyle,
                textAlign: "center",
                paddingTop: "1.5em",
                width: "1em",
                backgroundColor: colors.primary,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              }}
            >
              LOC
            </th>
            <th
              style={{
                ...tableHeaderStyle,
                textAlign: "right",
                width: "1em",
                paddingTop: "1.5em",
                paddingLeft: "1.5em",
              }}
            >
              Folders
            </th>
            <th
              style={{
                ...tableHeaderStyle,
                textAlign: "right",
                width: "1em",
                paddingTop: "1.5em",
              }}
            >
              Files
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableCellStyle}>React</td>
            <td
              style={{
                ...tableCellStyle,
                backgroundColor: colors.primary,
                textAlign: "center",
              }}
            >
              304
            </td>
            <td style={{ ...tableCellStyle, textAlign: "right" }}>10</td>
            <td style={{ ...tableCellStyle, textAlign: "right" }}>9</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Ember</td>
            <td
              style={{
                ...tableCellStyle,
                backgroundColor: colors.primary,
                textAlign: "center",
              }}
            >
              313
            </td>
            <td style={{ ...tableCellStyle, textAlign: "right" }}>8</td>
            <td style={{ ...tableCellStyle, textAlign: "right" }}>14</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Vue</td>
            <td
              style={{
                ...tableCellStyle,
                backgroundColor: colors.primary,
                textAlign: "center",
              }}
            >
              361
            </td>
            <td style={{ ...tableCellStyle, textAlign: "right" }}>1</td>
            <td style={{ ...tableCellStyle, textAlign: "right" }}>10</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Angular</td>
            <td
              style={{
                ...tableCellStyle,
                backgroundColor: colors.primary,
                textAlign: "center",
                paddingBottom: "1.5em",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            >
              425
            </td>
            <td style={{ ...tableCellStyle, textAlign: "right" }}>10</td>
            <td style={{ ...tableCellStyle, textAlign: "right" }}>23</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectMetrics;

// - react -- 52.3kb
// - angular 523.5kb
// - vue - 53.7kb
// - ember - 187.3kb
