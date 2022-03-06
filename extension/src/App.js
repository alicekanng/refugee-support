import HomePage from "./pages/HomePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/montserrat";

const theme = createTheme({ fontFamily: "Montserrat" });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
