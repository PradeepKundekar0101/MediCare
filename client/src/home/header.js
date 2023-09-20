import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { box, headerBox, headerPaper, raleway, subtitle } from "./styles";

const Header = () => {
  return (
    <Paper sx={headerPaper}>
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={process.env.PUBLIC_URL + "images/home.jpg"}
          alt="medconnect"
        />
      }
      <Box sx={box} />
      
      {/* Text above image */}
      <Grid container>
        <Grid item md={6}>
          <Box sx={headerBox}>
            <Typography
              component="h1"
              variant="h3"
              color="#fff"
              gutterBottom
              sx={subtitle}
            >
              "Your Health, Your Home: Seamless Care through Virtual Consultations"
            </Typography>
            <Typography variant="h6" color="inherit" paragraph sx={raleway}>
            Experience Top-tier Medical Consultations from the Comfort of Home, Because Your Health Matters Every Moment.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
