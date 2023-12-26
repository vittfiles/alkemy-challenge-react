import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import MovieCard from "./MovieCard";
import { useModal } from "./useModal";
import Modal from "./Modal";

function Listado() {
  const [movieList, setMovieList] = useState([]);
  const [message, setMessage] = useState("");
  const [isOpenModal, openModal, closeModal] = useModal(false);
  //771093c003e693cc55f3d6a5bb31d059
  const access =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzEwOTNjMDAzZTY5M2NjNTVmM2Q2YTViYjMxZDA1OSIsInN1YiI6IjY1OGFkZWY1NWFiYTMyNjhmMWI5MTkyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SQ6HFxx4ALfoYvKHTHMvCa7YqEnR4lR79A_zL328mQ8";

  let token = sessionStorage.getItem("token");

  useEffect(() => {
    if (token && movieList.length <= 0) {
      const endPoint =
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&page=1&sort_by=popularity.desc";

      const config = {
        headers: { Authorization: "Bearer " + access },
      };
      axios
        .get(endPoint, config)
        .then((res) => {
          setMovieList(res.data.results);
          console.log(res.data);
        })
        .catch((err) => {
          setMessage(
            "Hubo un error al obtener los datos, verifica tu conexión de internet"
          );
          openModal();
        });
    }
  }, []);

  if (!token) return <Navigate to="/" />;

  return (
    <section className="w-full max-w-[960px] mx-auto flex flex-wrap content-start p-6">
      {movieList.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
          title={movie.title}
        />
      ))}

      {isOpenModal && (
        <Modal close={closeModal} showClose={false}>
          {message}
        </Modal>
      )}
    </section>
  );
}

export default Listado;
