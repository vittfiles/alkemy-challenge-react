import { useNavigate, NavLink } from "react-router-dom";

function NavItem({ link, open, setOpen }) {
  return (
    <li
      key={link.title}
      className={"flex font-secondary " + (open ? "mb-4" : "")}
    >
      <NavLink
        className="font-bold py-1 px-2 hover:text-blue-300  rounded-lg border-2 border-white border-solid ml-2 hover:border-blue-300"
        to={link.path}
        onClick={() => {
          setOpen(false);
        }}
      >
        {link.title}
      </NavLink>
    </li>
  );
}

export default NavItem;
