import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [];
  links.push({ title: "Home", path: "/" });
  links.push({ title: "Listado", path: "/listado" });

  return (
    <nav className="block">
      <ul className="flex">
        {links.map((link) => (
          <li
            key={link.title}
            className="flex font-secondary rounded-lg border-2 border-white border-solid mx-2 hover:border-blue-300"
          >
            <NavLink
              className="font-bold py-1 px-2 hover:text-blue-300"
              to={link.path}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
