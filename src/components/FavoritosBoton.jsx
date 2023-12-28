import { useContext, useEffect, useState } from "react";
import FavoritosContext from "./FavoritosContext";
import HeartIcon from "./icons/HeartIcon";
import FilledHeartIcon from "./icons/FilledHeartIcon";

function FavoritosBoton({ mini = false, movie }) {
  const { addFavoritos, findFavoritos, removeFavoritos, clearFavoritos } =
    useContext(FavoritosContext);
  const data = {
    id: movie.id,
    title: movie.title,
    vote_average: movie.vote_average,
    poster_path: movie.poster_path,
  };
  const [find, setFind] = useState(findFavoritos(movie.id));

  const handleClick = (e) => {
    //clearFavoritos();
    if (findFavoritos(data.id)) {
      removeFavoritos(data.id);
      setFind(false);
    } else {
      addFavoritos(data);
      setFind(true);
    }
  };

  return (
    <>
      {mini ? (
        <button
          aria-label={find ? "quitar de favoritos" : "agregar a favoritos"}
          onClick={handleClick}
          className="absolute top-[5px] left-[5px] bg-ultra-alfa rounded-[50%] p-2"
        >
          {find ? (
            <FilledHeartIcon
              defaultClass={"w-[25px] fill-white hover:fill-blue-400"}
            />
          ) : (
            <HeartIcon />
          )}
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="w-full px-4 py-2 font-secondary text-center border-white border-solid border-2 hover:text-blue-400 hover:border-blue-400"
        >
          {find ? "Remover de " : "Agregar a "}favoritos
        </button>
      )}
    </>
  );
}

export default FavoritosBoton;
