import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getCharacters } from "../../api/endpoint";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getRecipes = async () => {
    try {
      setError(false);
      const { data } = await getCharacters();
      setRecipes(data);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  if (loading) return <div className="message">Cargando...</div>;

  return (
    <>
      <Helmet>
        <title>Recetas</title>
      </Helmet>

      <div className="recipes">
        {error && <p>Ha ocurrido un error inesperado</p>}
        {recipes.map((character) => (
          <Link
            to={`/recipe/${character.id}`}
            className="recipe"
            key={character.id}
          >
            <span
              className="bg"
              style={{
                backgroundImage: `url(${character.image})`,
                backgroundSize: "cover",
              }}
            ></span>
            <span className="info">
              <h2>{character.name}</h2>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};
