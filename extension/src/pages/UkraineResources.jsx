import Header from "../components/Header";
import { Typography, Box, Button, Grid, Divider, Link } from "@mui/material";

export default function UkraineResources() {
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
                  url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/ukraine-measures.html#next",
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
                lineHeight: "120%",
                fontWeight: 800,
              }}
            >
              Government of Canada Policy for Ukranian Refugees
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
                  url: "https://its-site.ams3.digitaloceanspaces.com/Document-Checklist-Applying-for-a-Permanent-Resident-Travel-Document.pdf",
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
                lineHeight: "120%",
                fontWeight: 800,
              }}
            >
              Permanent Resident Checklist
            </Typography>
          </Button>
          <Typography
            variant="subtitle2"
            align="center"
            sx={{
              fontStyle: "italic",
              fontFamily: "Montserrat",
              color: "white",
              padding: "30px 15px 0px",
              fontSize: "11px",
              lineHeight: "100%",
            }}
          >
            Currently the government is prioritizing applications from people
            who currently reside in Ukraine for Permanent Residence, Proof of
            Citizenship, Temporary Residence, Citizenship Grant for Adoption.
          </Typography>
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
                  url: "https://www.canada.ca/en/immigration-refugees-citizenship/news/2022/03/canada-to-welcome-those-fleeing-the-war-in-ukraine.html",
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
                lineHeight: "120%",
                fontWeight: 800,
              }}
            >
              Canada-Ukraine Authorization for Emergency Travel Updates
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
