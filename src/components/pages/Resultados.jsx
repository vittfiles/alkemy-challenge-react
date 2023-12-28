import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Modal";
import ProtectedPath from "../ProtectedPath";
import { useModal } from "../useModal";
import Loader from "../Loader";
import MovieCard from "../MovieCard";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../Pagination";

function Resultados() {
  const [message, setMessage] = useState("");
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [movieList, setMovieList] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  let navigate = useNavigate();

  let location = useLocation();
  let query = new URLSearchParams(location.search);
  let search = query.get("search");
  let currentPage = query.get("page") || 1;
  console.log(currentPage);

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
        .get(endPoint + search + "&page=" + currentPage, config)
        .then((res) => {
          setMovieList(res.data.results);
          setTotalPages(res.data.total_pages);
          console.log(res.data.results);
        })
        .catch((err) => {
          setMessage(
            "Hubo un error al obtener los datos, verifica tu conexión de internet"
          );
          openModal();
        });
    }
  }, [search, currentPage]);

  const updatePage = (newPage) => {
    setMovieList(null);
    navigate("/resultados?search=" + search + "&page=" + newPage);
  };

  return (
    <ProtectedPath>
      <section className="w-full max-w-[960px] mx-auto flex flex-wrap content-start p-6">
        <h1 className="w-full font-secondary text-xl pl-[11px]">
          Resultados : {search}
        </h1>
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

export default Resultados;
