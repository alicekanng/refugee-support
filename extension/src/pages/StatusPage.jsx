import { Typography, Box, Button, Grid } from "@mui/material";
import logo from "../logo.svg";
import approved from "../approved.svg";
import unapproved from "../unapproved.svg";
import MenuIcon from "@mui/icons-material/Menu";

export default function StatusPage() {
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
        <Grid item display="flex" flexDirection="column" alignItems="center">
          <img src={approved} style={{ maxWidth: "170px" }} alt="approved" />
          <Button
            variant="contained"
            disableElevation
            sx={{
              background: "white",
              textTransform: "none",
              maxWidth: "250px",
              zIndex: 2,
              marginTop: "-20px",
            }}
          >
            <Typography
              variant="subtitle2"
              align="center"
              sx={{
                color: "black",
                fontFamily: "Montserrat",
                fontStyle: "italic",
                lineHeight: "100%",
                fontWeight: 500,
              }}
            >
              I have already been approved for refugee status
            </Typography>
          </Button>
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          alignItems="center"
          paddingTop="15px"
        >
          <img
            src={unapproved}
            style={{ maxWidth: "170px" }}
            alt="unapproved"
          />
          <Button
            variant="contained"
            disableElevation
            sx={{
              background: "white",
              textTransform: "none",
              maxWidth: "250px",
              zIndex: 2,
              marginTop: "-20px",
            }}
          >
            <Typography
              variant="subtitle2"
              align="center"
              sx={{
                color: "black",
                fontFamily: "Montserrat",
                fontStyle: "italic",
                lineHeight: "100%",
                fontWeight: 500,
              }}
            >
              I am looking to start the refugee status process
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
