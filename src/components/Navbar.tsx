import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Stack direction="row" gap={10}>
      <Link to="/">Home</Link>
      <Link to="/typography">Typography</Link>
      <Link to="/button">Buttons</Link>
    </Stack>
  );
}
