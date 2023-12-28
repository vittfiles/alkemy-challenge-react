import { NavLink } from "react-router-dom";
import FavoritosBoton from "./FavoritosBoton";
import ImageIcon from "./icons/ImageIcon";

function MovieCard({ id, poster_path, vote_average, title }) {
  let movie = { id, poster_path, vote_average, title };
  return (
    <article className="flex flex-col w-full xs:w-1/2 md:w-1/3 lg:w-1/4 flex p-3 mb-5">
      <NavLink
        to={"/detalles/" + id}
        className="w-full font-secondary text-center border-white border-solid border-2 py-1 hover:text-blue-400 hover:border-blue-400"
      >
        VER DETALLES
      </NavLink>
      <figure className="relative">
        {poster_path ? (
          <img
            src={"https://image.tmdb.org/t/p/original/" + poster_path}
            alt="no se encontro"
            className="w-full"
          />
        ) : (
          <ImageIcon />
        )}

        <p className="absolute bottom-[5px] text-xs right-[10px] px-2 py-1 rounded-xl bg-blue-600 font-secondary">
          Puntaje: {vote_average}
        </p>
        <FavoritosBoton mini={true} movie={movie} />
      </figure>
      <h3 className="flex-1 font-primary">{title}</h3>
    </article>
  );
}

export default MovieCard;
