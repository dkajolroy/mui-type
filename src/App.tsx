import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <Box display="flex" flexDirection="column">
      <Button variant="contained">Hello World</Button>
      <Button variant="contained">Hello World</Button>
      <Button variant="contained">Hello World</Button>
    </Box>
  );
}
