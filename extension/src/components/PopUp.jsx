import { Typography, Box, Button, Grid } from "@mui/material";
import logo from "../logo.png";
import startImage from "../startImage.png";
import MenuIcon from "@mui/icons-material/Menu";

export default function PopUp() {
  return (
    <Box
      sx={{
        background: "#b0d8ff",
        minWidth: "300px",
        minHeight: "600px",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <MenuIcon
          sx={{ paddingLeft: "240px", paddingTop: "10px", color: "white" }}
        />
        <img src={logo} style={{ maxWidth: "100px" }} />
        <Typography
          variant="subtitle 6"
          align="center"
          sx={{
            fontStyle: "italic",
            fontFamily: "Montserrat",
            color: "white",
            padding: "0px 25px",
            fontSize: "14px",
          }}
        >
          Find out where you can travel safely, seek asylum and get suport in
          the immigration process
        </Typography>
        <Button
          variant="contained"
          sx={{
            maxHeight: "35px",
            marginTop: "15px",
            padding: "13px 36px",
            background: "#7EEDB5",
            fontFamily: "Montserrat",
            fontWeight: 600,
            textTransform: "none",
            boxShadow: "0px 2px 3px 0px #74bafe",
          }}
        >
          Get Started
        </Button>
      </Grid>
      <Box
        sx={{
          background: "#ffffff",
          width: "300px",
          height: "330px",
          position: "absolute",
          bottom: 0,
        }}
      >
        <img
          src={startImage}
          style={{ maxWidth: "300px", position: "absolute", bottom: 0 }}
        />
      </Box>
    </Box>
  );
}
