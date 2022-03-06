import Header from "../components/Header";
import { Typography, Box, Button, Grid, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ResourcesPage() {
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
        display="flex"
        flexDirection="column"
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
            RESOURCES
          </Typography>
          <Divider
            sx={{
              borderColor: "white",
              borderWidth: 1,
              boxShadow: "0px 2px 3px 0px #74bafe",
            }}
          />
        </Grid>
        <Grid item display="flex" flexDirection="column" alignItems="center">
          <Button
            variant="contained"
            disableElevation
            sx={{
              background: "white",
              textTransform: "none",
              maxWidth: "230px",
              marginTop: "50px",
              boxShadow: "0px 2px 3px 0px #74bafe",
            }}
            onClick={() =>
              chrome.tabs.update(
                undefined,
                {
                  url: "https://irb-cisr.gc.ca/en/refugee-claims/pages/ClaDemKitTro.aspx",
                },
                undefined
              )
            }
          >
            <Typography
              variant="subtitle2"
              align="center"
              sx={{
                color: "black",
                fontFamily: "Montserrat",
                fontWeight: 800,
                minWidth: "250px",
              }}
            >
              Refugee Claimant’s Kit
            </Typography>
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={{
              background: "white",
              textTransform: "none",
              maxWidth: "230px",
              marginTop: "20px",
              boxShadow: "0px 2px 3px 0px #74bafe",
            }}
            onClick={() =>
              chrome.tabs.update(
                undefined,
                {
                  url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams.html",
                },
                undefined
              )
            }
          >
            <Typography
              variant="subtitle2"
              align="center"
              sx={{
                color: "black",
                fontFamily: "Montserrat",
                fontWeight: 800,
                minWidth: "250px",
              }}
            >
              Medical Exams
            </Typography>
          </Button>
          <Button
            display="flex"
            variant="contained"
            sx={{
              maxHeight: "35px",
              marginTop: "100px",
              padding: "13px 36px",
              background: "#7EEDB5",
              fontFamily: "Montserrat",
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0px 2px 3px 0px #74bafe",
              borderRadius: "20px",
              alignSelf: "center",
            }}
            onClick={() => navigate("/checklist")}
          >
            Go Back to Checklist
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
