import { NavLink } from "react-router-dom";

export const NavLinks: React.FC = () => {
  return (
    <>
      <li>
        {" "}
        <NavLink to="/Location">Location</NavLink>
      </li>
      <li>
        <NavLink to="/Blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/Services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/AboutUs">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/Franchise">Franchise With Us</NavLink>
      </li>
    </>
  );
};

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="md:flex items-center gap-7 text-items-nav">
          <NavLinks />
        </ul>
      </nav>
    </>
  );
};
