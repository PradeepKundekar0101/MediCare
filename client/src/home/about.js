import * as React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  box,
  description,
  aboutPaper,
  subtitle,
  raleway,
  headerBox,
} from "./styles";

const About = () => {
  return (
    <div id="about">
      <Typography
        component="h1"
        variant="h5"
        color="inherit"
        align="center"
        gutterBottom
        sx={description}
      >
       medconnect serves individuals seeking to avoid the frustration of long appointment queues when booking with top-tier local doctors. 
        <br />
        <i>
          <b> Join hands to drive transformation in the healthcare sector, together!</b>
        </i>
      </Typography>
      <Paper sx={aboutPaper}>
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src={process.env.PUBLIC_URL + "images/doctors.jpg"}
            alt="Doctors"
          />
        }
        <Box sx={box} />

        {/* Text above image */}
        <Grid container>
          <Grid item md={6} margin={"0px auto"} >
            <Box sx={headerBox}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                sx={subtitle}
                align="center"
              >
                "Trusted Professionals"
              </Typography>
              <Typography variant="h5" color="inherit" paragraph sx={raleway}>
                Consult one of the best doctors just by a click!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default About;
