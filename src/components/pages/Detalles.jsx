import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import { useModal } from "../useModal";
import Modal from "../Modal";
import DetallesMovie from "../DetallesMovie";
import Loader from "../Loader";

function Detalles() {
  const [message, setMessage] = useState("");
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const id = params?.id;
  const access =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzEwOTNjMDAzZTY5M2NjNTVmM2Q2YTViYjMxZDA1OSIsInN1YiI6IjY1OGFkZWY1NWFiYTMyNjhmMWI5MTkyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SQ6HFxx4ALfoYvKHTHMvCa7YqEnR4lR79A_zL328mQ8";

  const token = sessionStorage.getItem("token");
  if (!token || !id) return <Navigate to="/" />;

  useEffect(() => {
    if (token && id) {
      const endPoint = "https://api.themoviedb.org/3/movie/";

      const config = {
        headers: { Authorization: "Bearer " + access },
      };
      axios
        .get(endPoint + id + "?language=es", config)
        .then((res) => {
          setMovie(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          setMessage(
            "Hubo un error al obtener los datos, verifica tu conexión de internet"
          );
          openModal();
        });
    }
  }, []);

  return (
    <section className="flex w-full justify-center p-4">
      {isOpenModal && (
        <Modal close={closeModal} showClose={false}>
          {message}
        </Modal>
      )}
      {movie ? <DetallesMovie movie={movie} /> : !isOpenModal && <Loader />}
    </section>
  );
}

export default Detalles;
