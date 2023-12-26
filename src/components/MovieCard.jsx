import { NavLink } from "react-router-dom";

function MovieCard({ id, poster_path, vote_average, title }) {
  return (
    <NavLink
      to={"/detalles?movieId=" + id}
      className="w-full xs:w-1/2 md:w-1/3 lg:w-1/4 flex p-3 mb-5 group"
    >
      <article className="flex flex-col">
        <span className="width-full font-secondary text-center border-white border-solid border-2 group-hover:text-blue-400 group-hover:border-blue-400">
          VER DETALLES
        </span>
        <figure className="relative">
          <img
            src={"https://image.tmdb.org/t/p/original/" + poster_path}
            alt="no se encontro"
            className="w-full"
          />

          <p className="absolute bottom-[5px] text-xs right-[10px] px-2 py-1 rounded-xl bg-blue-600 font-secondary">
            Puntaje: {vote_average}
          </p>
        </figure>
        <h3 className="flex-1 font-primary">{title}</h3>
      </article>
    </NavLink>
  );
}

export default MovieCard;
