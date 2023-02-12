import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <Stack direction="row" spacing={10}>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? { textDecorationLine: "underline" }
            : { textDecorationLine: "none" }
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? { textDecorationLine: "underline" }
            : { textDecorationLine: "none" }
        }
        to="/typography"
      >
        Typography
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? { textDecorationLine: "underline" }
            : { textDecorationLine: "none" }
        }
        to="/button"
      >
        Buttons
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? { textDecorationLine: "underline" }
            : { textDecorationLine: "none" }
        }
        to="/flex"
      >
        Flexbox
      </NavLink>
    </Stack>
  );
}
