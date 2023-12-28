import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../MovieCard";
import { useModal } from "../useModal";
import Modal from "../Modal";
import Loader from "../Loader";
import ProtectedPath from "../ProtectedPath";
import Pagination from "../Pagination";
import { useLocation, useNavigate } from "react-router-dom";

function Listado() {
  const [movieList, setMovieList] = useState(null);
  const [message, setMessage] = useState("");
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [totalPages, setTotalPages] = useState(1);

  let navigate = useNavigate();

  let location = useLocation();
  let query = new URLSearchParams(location.search);
  let currentPage = query.get("page") || 1;
  console.log(currentPage);

  const access =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzEwOTNjMDAzZTY5M2NjNTVmM2Q2YTViYjMxZDA1OSIsInN1YiI6IjY1OGFkZWY1NWFiYTMyNjhmMWI5MTkyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SQ6HFxx4ALfoYvKHTHMvCa7YqEnR4lR79A_zL328mQ8";

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const endPoint =
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&sort_by=popularity.desc&page=";

      const config = {
        headers: { Authorization: "Bearer " + access },
      };
      axios
        .get(endPoint + currentPage, config)
        .then((res) => {
          setMovieList(res.data.results);
          setTotalPages(res.data.total_pages);
          console.log(res.data);
        })
        .catch((err) => {
          setMessage(
            "Hubo un error al obtener los datos, verifica tu conexión de internet"
          );
          openModal();
        });
    }
  }, [currentPage]);

  const updatePage = (newPage) => {
    setMovieList(null);
    navigate("/listado?page=" + newPage);
  };

  return (
    <ProtectedPath>
      <section className="w-full max-w-[960px] mx-auto flex flex-wrap content-start p-6">
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
        <Pagination
          currentPage={currentPage}
          updatePage={updatePage}
          totalPages={totalPages}
        />
      </section>
    </ProtectedPath>
  );
}

export default Listado;
