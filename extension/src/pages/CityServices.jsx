import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Typography, Box, Grid, Button } from "@mui/material";
import bulletPoint from "../images/bulletPoint.svg";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBKtFQ4tryDyCDl_SgP1li3SNpZ5C2DsbI",
  authDomain: "cmd-f-22-refugee-support-db.firebaseapp.com",
  projectId: "cmd-f-22-refugee-support-db",
  storageBucket: "cmd-f-22-refugee-support-db.appspot.com",
  messagingSenderId: "886435650547",
  appId: "1:886435650547:web:403df2f555768f949d5086",
  measurementId: "G-Y7H48JCY4P",
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore();

const convertToNormalCase = (s) => {
  return s
    .split("_")
    .map((n) => `${n.charAt(0).toUpperCase() + n.slice(1)}`)
    .join(" ");
};

export default function CityServices() {
  const [services, setServices] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getAllData = async () => {
      const querySnapshot = await getDocs(
        collection(db, "refugee_services_within_canada")
      );
      let data;
      querySnapshot.forEach((doc) => {
        if (doc.id === "Vancouver") {
          data = doc.data();
        }
      });
      setServices(data);
    };
    getAllData();
  }, []);

  const handleMapRender = (index) => {
    const name = Object.keys(services)[index];
    const encoded = encodeURIComponent(convertToNormalCase(name));
    chrome.tabs.create(
      { url: `https://www.google.com/maps/search/?api=1&query=${encoded}` },
      undefined
    );
  };

  return (
    <Box
      sx={{
        background: "#b0d8ff",
        minWidth: "300px",
        minHeight: "600px",
      }}
    >
      <Grid container direction="column" justifyContent="center">
        <Header />
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
          Listed below are some resources in the city you have been assigned to.
          Click them on the map to see each location and find more details!
        </Typography>
        <Grid
          container
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          paddingTop="20px"
        >
          {Object.keys(services).map((name, index) => (
            <Grid item display="flex" flexDirection="row" margin="0px 10px">
              <img src={bulletPoint} style={{ maxWidth: "20px" }} alt="logo" />
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Montserrat",
                  color: "white",
                  fontWeight: 1000,
                  fontSize: "12px",
                  minWidth: "250px",
                  lineHeight: "200%",
                }}
                onClick={(e) => handleMapRender(index)}
              >
                {convertToNormalCase(name)}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Button
          display="flex"
          variant="contained"
          sx={{
            maxHeight: "35px",
            marginTop: "50px",
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
          onClick={() => navigate("/")}
        >
          Back To Home
        </Button>
      </Grid>
    </Box>
  );
}
