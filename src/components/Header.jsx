import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Buscador from "./Buscador";

function Header() {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

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
    <header className="relative w-full flex justify-center flex-wrap content-center bg-dark p-4 z-[50] sticky top-0">
      <h1 className="order-0 flex flex-1 px-2 font-secondary text-white text-2xl self-center">
        <span>CUEVAN</span>
        <span className="text-blue-300">ARG</span>
      </h1>
      <Buscador width={width} />
      <button
        onClick={() => setOpen(!open)}
        className="order-2 sm:hidden rounded-lg border-2 border-white border-solid mx-2 hover:border-blue-300 p-2 group"
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
      <Navbar open={open && width < 640} />
    </header>
  );
}

export default Header;
