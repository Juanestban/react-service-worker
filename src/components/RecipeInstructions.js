import React from "react";

export const RecipeInstructions = ({ instructions = [] }) => {
  return (
    <div className="instructions">
      <h2>Episodes</h2>
      <div className="steps">
        {instructions.map((line, index) => (
          <div className="step" key={index}>
            <div className="number">{index + 1}</div>
            <div
              className="text"
              style={{ display: "flex", alignItems: "center" }}
            >
              {line}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
