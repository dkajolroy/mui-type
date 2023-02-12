import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import ButtonPage from "./pages/ButtonPage";
import HomePage from "./pages/HomePage";
import TypographyPage from "./pages/TypographyPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/typography" element={<TypographyPage />} />
        <Route path="/button" element={<ButtonPage />} />
      </Routes>
    </BrowserRouter>
  );
}
