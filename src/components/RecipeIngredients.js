import React from "react";

export const RecipeIngredients = ({ ingredients = undefined }) => {
  return (
    <div className="ingredients">
      <h2>Ingredients</h2>
      {ingredients && (
        <ul className="newUl">
          <li>
            <b>Genero:</b> {ingredients.gender}
          </li>
          <li>
            <b>Especie:</b> {ingredients.species}
          </li>
          <li>
            <b>status:</b> {ingredients.status}
          </li>
        </ul>
      )}
      {!ingredients && (
        <div className="text">
          <p>No existe estos datos</p>
        </div>
      )}
    </div>
  );
};
