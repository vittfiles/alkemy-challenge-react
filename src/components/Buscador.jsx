import { useState } from "react";
import { useModal } from "./useModal";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

function Buscador({ width }) {
  const [message, setMessage] = useState("");
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [search, setSearch] = useState("");
  const [slash, setSlash] = useState("");
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  const limit = 484;

  const styleSearch = "text-white flex  hover:border-blue-300";

  const handleFocus = (e) => {
    setSlash("");
  };
  const handleBlur = (e) => {
    setSlash("");
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let keywords = search.trim();
    if (keywords.length === 0) {
      setMessage("ingresa texto para buscar por título");
      openModal();
    } else if (keywords.length < 3) {
      setMessage("ingresa al menos 4 caracteres");
      openModal();
    } else {
      setSearch("");
      e.target.value = "";
      navigate("/resultados?search=" + keywords);
    }
  };
  return (
    <>
      {width < limit && !open && (
        <button
          onClick={() => setOpen(true)}
          className="order-1 w-[40px] p-[8px] sm:hidden rounded-lg border-2 border-white border-solid mx-1 sm:mx-2 hover:border-blue-300 p-2 group"
        >
          <svg
            className="fill-white group-hover:fill-blue-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      )}
      {(width > limit || open) && (
        <form
          onSubmit={handleSubmit}
          className={
            width < limit
              ? "order-4 w-full" + styleSearch + "mx-auto mt-4"
              : "order-1" + styleSearch
          }
        >
          <button className="w-[30px] p-[5px] rounded-l-lg border-2 border-white border-solid hover:border-blue-300 group">
            <svg
              className="fill-white group-hover:fill-blue-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
          <input
            type="text"
            name="search"
            id="search"
            value={search + slash}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="rounded-r-lg border-2 border-white border-solid bg-dark hover:border-blue-300 px-2 outline-none font-primary text-sm focus:bg-white focus:text-ultra"
          />
        </form>
      )}

      {width < limit && open && (
        <button
          onClick={() => setOpen(false)}
          className="order-5 w-[30px] px-[4px] ml-2 mt-4 rounded-lg border-2 border-white border-solid hover:border-blue-300 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="fill-white group-hover:fill-blue-300"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      )}
      {isOpenModal && (
        <Modal close={closeModal} showClose={true}>
          {message}
        </Modal>
      )}
    </>
  );
}

export default Buscador;
