import { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import Buscador from "./Buscador";
import FavoritosContext from "./FavoritosContext";
import { NavLink } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const { favoritos, addFavoritos } = useContext(FavoritosContext);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className="relative w-full flex justify-center flex-wrap content-center bg-dark p-4 z-[50] sticky top-0 left-0">
      <h1 className="order-0 flex flex-1 font-secondary text-white text-2xl self-center">
        <span>CUEVAN</span>
        <span className="text-blue-300">ARG</span>
      </h1>
      <NavLink to="/favoritos" className="relative group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[40px] sm:w-[36px] fill-white p-1 mx-1 sm:mx-2 border-2 border-white border-solid rounded-lg group-hover:border-blue-300 group-hover:fill-blue-300"
          viewBox="0 0 512 512"
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg>
        <span className="absolute font-secondary text-[1.1rem] text-dark top-0 left-0 w-full h-full text-center pt-[6px]">
          {favoritos.length}
        </span>
      </NavLink>
      <Buscador width={width} />
      <button
        onClick={() => setOpen(!open)}
        className="order-2 sm:hidden rounded-lg border-2 border-white border-solid mx-1 sm:mx-2 hover:border-blue-300 p-2 group"
      >
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 448 512"
            className="fill-white group-hover:fill-blue-300"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 384 512"
            className="fill-white group-hover:fill-blue-300"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        )}
      </button>
      <Navbar open={open && width < 640} setOpen={setOpen} />
    </header>
  );
}

export default Header;
