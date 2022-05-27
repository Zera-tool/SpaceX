import { NavLink } from "react-router-dom";
import logo from "../common/images/spacex-logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt={"spacex logo"} />
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#787a7c",
          })}
        >
          <h2>Home</h2>
        </NavLink>
        <NavLink
          to="crew"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#787a7c",
          })}
        >
          <h2>Crew</h2>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
