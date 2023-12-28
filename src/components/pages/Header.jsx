import { useState, useEffect, useContext } from "react";
import Navbar from "../Navbar";
import Buscador from "../Buscador";
import FavoritosContext from "../FavoritosContext";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext";
import FilledHeartIcon from "../icons/FilledHeartIcon";
import BarsIcon from "../icons/BarsIcon";
import XIcon from "../icons/XIcon";

function Header() {
  const { user } = useContext(UserContext);
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
      {user && (
        <>
          <NavLink to="/favoritos" className="relative group">
            <FilledHeartIcon defaultClass="w-[40px] sm:w-[36px] fill-white p-1 mx-1 sm:mx-2 border-2 border-white border-solid rounded-lg group-hover:border-blue-300 group-hover:fill-blue-300" />
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
              <BarsIcon defaultClass="fill-white group-hover:fill-blue-300" />
            ) : (
              <XIcon defaultClass="fill-white group-hover:fill-blue-300" />
            )}
          </button>
          <Navbar open={open && width < 640} setOpen={setOpen} />
        </>
      )}
    </header>
  );
}

export default Header;
