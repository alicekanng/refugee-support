import Header from "../components/Header";
import { Typography, Box, Button, Grid } from "@mui/material";
import { Input } from "@chakra-ui/input";
import shield from "../images/shield.svg";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
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
        <Header />
        <Grid item paddingTop="20px">
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontFamily: "Montserrat",
              color: "white",
              fontWeight: 800,
            }}
          >
            INFORMATION
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            sx={{
              fontStyle: "italic",
              fontFamily: "Montserrat",
              color: "white",
              padding: "10px 15px",
              fontSize: "11px",
              lineHeight: "100%",
            }}
          >
            Please fill out the information below so we can provide you with
            potential refuge locations as well as give information regarding the
            visa process and any local services offered to help integrate
            newcomers.
          </Typography>
        </Grid>
        <Grid item paddingTop="20px">
          <Typography
            variant="subtitle2"
            alignSelf="flex-start"
            sx={{
              fontStyle: "italic",
              fontFamily: "Montserrat",
              color: "white",
              paddingBottom: "5px",
              fontSize: "11px",
              lineHeight: "100%",
              fontWeight: 1000,
            }}
          >
            Full Name
          </Typography>
          <Input
            variant="unstyled"
            backgroundColor="white"
            border="none"
            borderRadius="10px"
            width="250px"
            height="20px"
          />
          <Typography
            variant="subtitle2"
            alignSelf="flex-start"
            sx={{
              fontStyle: "italic",
              fontFamily: "Montserrat",
              color: "white",
              padding: "20px 0px 5px",
              fontSize: "11px",
              lineHeight: "100%",
              fontWeight: 1000,
            }}
          >
            City of Assignment
          </Typography>
          <Input
            variant="unstyled"
            backgroundColor="white"
            border="none"
            borderRadius="10px"
            width="250px"
            height="20px"
          />
          <Typography
            variant="subtitle2"
            alignSelf="flex-start"
            sx={{
              fontStyle: "italic",
              fontFamily: "Montserrat",
              color: "white",
              padding: "20px 0px 5px",
              fontSize: "11px",
              lineHeight: "100%",
              fontWeight: 1000,
            }}
          >
            Email Address
          </Typography>
          <Input
            variant="unstyled"
            backgroundColor="white"
            border="none"
            borderRadius="10px"
            width="250px"
            height="20px"
          />
        </Grid>
        <Button
          variant="contained"
          sx={{
            maxHeight: "35px",
            marginTop: "30px",
            padding: "13px 36px",
            background: "#7EEDB5",
            fontFamily: "Montserrat",
            fontWeight: 600,
            textTransform: "none",
            boxShadow: "0px 2px 3px 0px #74bafe",
            borderRadius: "20px",
          }}
          onClick={() => navigate("/services")}
        >
          Next
        </Button>
        <img
          src={shield}
          style={{ maxWidth: "60px", paddingTop: "40px" }}
          alt="shield"
        />
      </Grid>
    </Box>
  );
}
