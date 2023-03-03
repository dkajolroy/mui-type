import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import ButtonPage from "./pages/ButtonPage";
import FlexboxPage from "./pages/FlexboxPage";
import HomePage from "./pages/HomePage";
import TypographyPage from "./pages/TypographyPage";

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[400],
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/flex" element={<FlexboxPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
