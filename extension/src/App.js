import HomePage from "./pages/HomePage";
import StatusPage from "./pages/StatusPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@fontsource/montserrat";
import LoginPage from "./pages/LoginPage";
import UkrainePage from "./pages/UkrainePage";

const theme = createTheme({ fontFamily: "Montserrat" });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ukraine" element={<UkrainePage />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );
}

export default App;
