import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.jpeg";

export const NavBar = () => {
  return (
    <nav className="flex justify-between mx-4">
      <ul className="flex items-center">
        <li className="mx-2">
          <Link to="/">
            <img src={logo} alt="logo" className="w-36 h-16" />
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-2">TV Shows</li>
        <li className="mx-2">Movies</li>
        <li className="mx-2">New & Popular</li>
      </ul>
      <ul className="flex items-center">
        <li className="mx-2">
          <i className="fas fa-search mx-2"></i>
        </li>
        <li className="mx-2">User</li>
      </ul>
    </nav>
  );
};
