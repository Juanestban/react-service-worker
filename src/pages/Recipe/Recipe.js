import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { getCharacter } from "../../api/endpoint";
import { RecipeIngredients } from "../../components/RecipeIngredients";
import { RecipeInstructions } from "../../components/RecipeInstructions.js";

export const Recipe = ({ match: { params } }) => {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getRecipeAnother = useCallback(async () => {
    try {
      setError(false);
      const { data } = await getCharacter(params.recipeId);
      console.log(data);
      setRecipe(data);
      setIsLoading(false);
    } catch {
      setError(true);
      setIsLoading(false);
    }
  }, [params.recipeId]);

  useEffect(() => {
    getRecipeAnother();
  }, [getRecipeAnother]);

  if (isLoading) return <div className="message">Cargando...</div>;
  if (error)
    return <div className="message">Ha ocurrido un error inesperado</div>;

  return (
    <div className="Recipe">
      <Helmet>
        <title>Personaje: {recipe.name}</title>
      </Helmet>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${recipe.image})`,
          backgroundSize: "contain",
        }}
      />
      <div className="title">
        <div className="info">
          <h1>{recipe.name}</h1>
          <p>Residencia: {recipe.location.name}</p>
        </div>
        <div></div>
      </div>
      <RecipeIngredients ingredients={recipe} />
      <RecipeInstructions instructions={recipe.episode} />
    </div>
  );
};
