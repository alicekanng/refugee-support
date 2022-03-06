import {
  Typography,
  Box,
  Button,
  Grid,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Header from "../components/Header";
import checklist from "../images/checklist.svg";
import { useNavigate } from "react-router-dom";

export default function CheckListPage() {
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
        <Grid item paddingTop="20px" display="flex" flexDirection="column">
          <Grid item display="flex" justifyContent="center">
            <img
              src={checklist}
              alt="checklist"
              style={{ maxWidth: "22px", paddingRight: "5px" }}
            />
            <Typography
              variant="h6"
              align="center"
              sx={{
                fontFamily: "Montserrat",
                color: "white",
                fontWeight: 800,
              }}
            >
              CHECKLIST
            </Typography>
          </Grid>
          <Divider
            sx={{
              borderColor: "white",
              borderWidth: 1,
              boxShadow: "0px 2px 3px 0px #74bafe",
            }}
          />
        </Grid>
        <Grid item display="flex" flexDirection="column">
          <FormGroup display="flex" flexDirection="column">
            <FormControlLabel
              sx={{ margin: "20px 10px 0px" }}
              control={
                <Checkbox
                  sx={{
                    color: "#D4F9DC",
                    "&.Mui-checked": {
                      color: "#61D080",
                    },
                  }}
                />
              }
              label={
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontStyle: "italic",
                    fontFamily: "Montserrat",
                    color: "white",
                    fontWeight: 900,
                    fontSize: "12px",
                  }}
                >
                  Valid Passport or Travel Document
                </Typography>
              }
            />
            <FormControlLabel
              sx={{ margin: "0px 10px" }}
              control={
                <Checkbox
                  sx={{
                    color: "#D4F9DC",
                    "&.Mui-checked": {
                      color: "#61D080",
                    },
                  }}
                />
              }
              label={
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontStyle: "italic",
                    fontFamily: "Montserrat",
                    color: "white",
                    fontWeight: 900,
                    fontSize: "12px",
                  }}
                >
                  Refugee Status Application
                </Typography>
              }
            />
            <FormControlLabel
              sx={{ margin: "0px 10px" }}
              control={
                <Checkbox
                  sx={{
                    color: "#D4F9DC",
                    "&.Mui-checked": {
                      color: "#61D080",
                    },
                  }}
                />
              }
              label={
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontStyle: "italic",
                    fontFamily: "Montserrat",
                    color: "white",
                    fontWeight: 900,
                    fontSize: "12px",
                  }}
                >
                  Referral from Home Country
                </Typography>
              }
            />
            <FormControlLabel
              sx={{ margin: "0px 10px" }}
              control={
                <Checkbox
                  sx={{
                    color: "#D4F9DC",
                    "&.Mui-checked": {
                      color: "#61D080",
                    },
                  }}
                />
              }
              label={
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontStyle: "italic",
                    fontFamily: "Montserrat",
                    color: "white",
                    fontWeight: 900,
                    fontSize: "12px",
                  }}
                >
                  Medical Exam
                </Typography>
              }
            />
            <FormControlLabel
              sx={{ margin: "0px 10px" }}
              control={
                <Checkbox
                  sx={{
                    color: "#D4F9DC",
                    "&.Mui-checked": {
                      color: "#61D080",
                    },
                  }}
                />
              }
              label={
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontStyle: "italic",
                    fontFamily: "Montserrat",
                    color: "white",
                    fontWeight: 900,
                    fontSize: "12px",
                  }}
                >
                  Criminal Record Check
                </Typography>
              }
            />
          </FormGroup>
          <Button
            display="flex"
            variant="contained"
            sx={{
              maxHeight: "35px",
              maxWidth: "220px",
              marginTop: "30px",
              padding: "13px 36px",
              background: "#7EEDB5",
              fontFamily: "Montserrat",
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0px 2px 3px 0px #74bafe",
              borderRadius: "20px",
              alignSelf: "center",
            }}
            onClick={() => navigate("/resources")}
          >
            Go to Resources
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
