import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";

function Navbar({ open }) {
  const links = [];
  const navigate = useNavigate();

  let token = sessionStorage.getItem("token");

  if (token) {
    links.push({ title: "Listado", path: "/listado" });
  } else {
    links.push({ title: "Home", path: "/" });
  }

  const handleClick = (e) => {
    if (token) {
      sessionStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <nav
      className={
        open
          ? "absolute bg-dark top-[3rem] left-0 w-full h-[calc(100vh-3rem)] flex justify-center align-center border-t-white border-t-solid border-t-2 pt-4 pb-12 mt-4"
          : "hidden sm:block"
      }
    >
      <ul className={open ? "flex flex-col justify-center" : "flex"}>
        {links.map((link, index) => (
          <NavItem key={index} link={link} open={open} />
        ))}
        {token && (
          <li className="flex font-secondary rounded-lg border-2 border-white border-solid mx-2 hover:border-blue-300">
            <button
              className="font-bold py-1 px-2 hover:text-blue-300"
              onClick={handleClick}
            >
              Salir
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
