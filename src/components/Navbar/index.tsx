import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const NavLinks: React.FC = () => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

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
      <li>
        <NavLink
          to="/"
          className="text-btn-signout"
          onClick={(e) => {
            e.preventDefault();
            handleSignOut();
          }}
        >
          sign out
        </NavLink>
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
