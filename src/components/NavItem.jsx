import { useNavigate, NavLink } from "react-router-dom";

function NavItem({ link, open }) {
  return (
    <li
      key={link.title}
      className={
        "flex font-secondary rounded-lg border-2 border-white border-solid mx-2 hover:border-blue-300 " +
        (open ? "mb-4" : "")
      }
    >
      <NavLink
        className="font-bold py-1 px-2 hover:text-blue-300"
        to={link.path}
      >
        {link.title}
      </NavLink>
    </li>
  );
}

export default NavItem;
