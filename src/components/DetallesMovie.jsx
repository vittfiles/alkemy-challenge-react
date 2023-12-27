import { useState } from "react";
import FavoritosBoton from "./FavoritosBoton";

function DetallesMovie({ movie }) {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  let release_date = movie?.release_date;
  let date = new Date(release_date);
  let year = date.getFullYear();
  let lang = movie?.spoken_languages;
  return (
    <article className="w-full max-w-[960px] flex flex-wrap items-start">
      <figure className="w-full max-w-[250px] sm:w-[200px] mb-8">
        <img
          src={"https://image.tmdb.org/t/p/original/" + movie?.poster_path}
          alt=""
        />
        <FavoritosBoton movie={movie} />
      </figure>
      <div className="sm:pl-8 w-full sm:w-[calc(100%-200px)]">
        <h2 className="font-secondary text-3xl mb-5">{movie?.title}</h2>
        <div className="flex justify-start text-blue-300 opacity-[.6]">
          <time
            className="border-blue-300 border-solid border-2 px-2 py-1 rounded-lg font-secondary text-sm mr-2"
            dateTime={release_date}
          >
            {year}
          </time>
          <p className="border-blue-300 border-solid border-2 px-2 py-1 rounded-lg font-secondary text-sm">
            Puntaje : {movie?.vote_average}
          </p>
        </div>
        <h3 className="font-primary text-md mb-3 mt-4">
          Título original : {movie?.original_title}
        </h3>
        <p className="font-primary text-sm pb-4">
          {lang?.lenght < 0 ? "Lenguajes " : "Lenguaje "}:
          {lang?.map((l, index) => {
            return (
              <span key={index}>
                {index > 0 && ","} {l.name}
              </span>
            );
          })}
          .
        </p>
        <p className="font-primary text-xs pb-4">
          Psinopsis : {movie?.overview}
        </p>
        <div className="font-primary text-xs">
          Generos :{" "}
          {movie?.genres?.map((g, index, array) => {
            return (
              <span key={index} className="font-secondary ml-2">
                {g.name}
                {index < array.length - 1 && array.length > 0 && ","}
              </span>
            );
          })}
          .
        </div>
      </div>
    </article>
  );
}

export default DetallesMovie;
