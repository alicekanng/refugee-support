import logo from "../images/logo_no_text.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";

export default function Header() {
  return (
    <Grid
      container
      display="flex"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs>
        <img
          src={logo}
          style={{ maxWidth: "65px", paddingLeft: "120px" }}
          alt="logo"
        />
      </Grid>
      <Grid item xs={2}>
        <MenuIcon sx={{ color: "white" }} />
      </Grid>
    </Grid>
  );
}
