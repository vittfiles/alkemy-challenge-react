import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import ProtectedPath from "./ProtectedPath";
import { useModal } from "./useModal";
import Loader from "./Loader";
import MovieCard from "./MovieCard";
import { useLocation } from "react-router-dom";

function Resultados() {
  const [message, setMessage] = useState("");
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [movieList, setMovieList] = useState(null);

  let location = useLocation();
  let query = new URLSearchParams(location.search);
  let search = query.get("search");

  const access =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzEwOTNjMDAzZTY5M2NjNTVmM2Q2YTViYjMxZDA1OSIsInN1YiI6IjY1OGFkZWY1NWFiYTMyNjhmMWI5MTkyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SQ6HFxx4ALfoYvKHTHMvCa7YqEnR4lR79A_zL328mQ8";

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token && search) {
      const endPoint =
        "https://api.themoviedb.org/3/search/movie?include_adult=false&language=es&page=1&query=";

      const config = {
        headers: { Authorization: "Bearer " + access },
      };
      axios
        .get(endPoint + search, config)
        .then((res) => {
          setMovieList(res.data.results);
          console.log(res.data.results);
        })
        .catch((err) => {
          setMessage(
            "Hubo un error al obtener los datos, verifica tu conexión de internet"
          );
          openModal();
        });
    }
  }, [search]);

  return (
    <ProtectedPath>
      <section className="w-full max-w-[960px] mx-auto flex flex-wrap content-start p-6">
        <h1 className="w-full font-secondary text-xl">Resultados : {search}</h1>
        {movieList
          ? movieList.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                title={movie.title}
              />
            ))
          : !isOpenModal && (
              <div className="flex w-full h-full p-4">
                <Loader />
              </div>
            )}

        {isOpenModal && (
          <Modal close={closeModal} showClose={false}>
            {message}
          </Modal>
        )}
      </section>
    </ProtectedPath>
  );
}

export default Resultados;
