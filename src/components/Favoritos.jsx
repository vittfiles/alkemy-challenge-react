import { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import ProtectedPath from "./ProtectedPath";
import FavoritosContext from "./FavoritosContext";

function Favoritos() {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <ProtectedPath>
      <section className="w-full max-w-[960px] mx-auto flex flex-wrap content-start p-6">
        {favoritos?.length ? (
          <>
            <h2 className="w-full font-secondary text-xl pl-[11px]">
              Favoritos :{" "}
            </h2>
            {favoritos.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                title={movie.title}
              />
            ))}
          </>
        ) : (
          <h2>No tienes peliculas en favoritos</h2>
        )}
      </section>
    </ProtectedPath>
  );
}

export default Favoritos;
