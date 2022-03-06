import HomePage from "./pages/HomePage";
import StatusPage from "./pages/StatusPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@fontsource/montserrat";
import LoginPage from "./pages/LoginPage";
import UkrainePage from "./pages/UkrainePage";
import UkraineResources from "./pages/UkraineResources";
import CheckListPage from "./pages/CheckListPage";
import CityServices from "./pages/CityServices";
import ResourcesPage from "./pages/ResourcesPage";

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
          <Route path="/ukraine-resources" element={<UkraineResources />} />
          <Route path="/checklist" element={<CheckListPage />} />
          <Route path="/services" element={<CityServices />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );
}

export default App;
