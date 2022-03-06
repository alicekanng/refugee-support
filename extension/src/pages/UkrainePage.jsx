import { Typography, Box, Button, Grid } from "@mui/material";
import logo from "../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import heart from "../images/heart.png";
import { useNavigate } from "react-router-dom";

export default function UkrainePage() {
  const navigate = useNavigate();
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
        <img src={logo} style={{ maxWidth: "100px" }} alt="logo" />
        <Grid item display="flex" flexDirection="column" paddingTop="90px">
          <img
            src={heart}
            alt="heart"
            style={{ maxWidth: "22px", alignSelf: "center" }}
          />
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              color: "white",
              fontWeight: 900,
              paddingTop: "5px",
            }}
          >
            Are you from Ukraine?
          </Typography>
          <Grid container display="flex" alignItems="center" marginTop="20px">
            <Grid item xs display="flex" justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  maxHeight: "35px",
                  padding: "13px 36px",
                  background: "#7EEDB5",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "0px 2px 3px 0px #74bafe",
                  borderRadius: "20px",
                  alignSelf: "center",
                  ":hover": {
                    backgroundColor: "#32D47A",
                  },
                }}
                onClick={() => navigate("/ukraine-resources")}
              >
                Yes
              </Button>
            </Grid>
            <Grid item xs display="flex" justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  maxHeight: "35px",
                  padding: "13px 36px",
                  background: "#7EEDB5",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "0px 2px 3px 0px #74bafe",
                  borderRadius: "20px",
                  alignSelf: "center",
                  ":hover": {
                    backgroundColor: "#32D47A",
                  },
                }}
                onClick={() => navigate("/checklist")}
              >
                No
              </Button>
            </Grid>
          </Grid>
          <Typography
            variant="subtitle2"
            align="center"
            sx={{
              fontStyle: "italic",
              fontFamily: "Montserrat",
              color: "white",
              padding: "20px 20px",
              fontSize: "11px",
              lineHeight: "100%",
            }}
          >
            Select “No” to proceed to the standard refugee status application
            process.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
