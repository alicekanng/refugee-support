import PopUp from "./components/PopUp";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/montserrat";

const theme = createTheme({ fontFamily: "Montserrat" });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PopUp />
    </ThemeProvider>
  );
}

export default App;
