import * as React from "react";
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { boldRaleway, button, cardMedia, raleway } from "./styles";

const Register = () => {
  return (
    <Grid container spacing={5} id="register">
      {/* REGISTER AS DOCTOR */}
      <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
  <Card sx={{ display: "flex" }}>
    {/* Image */}
   

    <CardContent sx={{ flex: 1, fontFamily: "Arial", backgroundImage: 'linear-gradient(0deg,#0009,#0009), url("images/doctor.jpg")', backgroundSize: 'cover', backgroundPosition:'center' }}>
      <Typography component="h1" variant="h4" color={"#fff"} sx={boldRaleway}>
        Register as a Doctor
      </Typography>
      <Typography variant="h5"  color={"#fff"} paragraph sx={raleway}>
        Join Us to Offer Your Expertise in Patient Consultations
      </Typography>
      <Button sx={button} href="/doctor_signup">
        Sign Up
      </Button>
      <Button sx={button} href="/doctor_signin">
        Sign In
      </Button>
    </CardContent>
  </Card>
</CardActionArea>

      </Grid>

      {/* REGISTER AS PATIENT */}
      <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#" >
  <Card sx={{ display: "flex" }}>
    {/* Image */}
   

    <CardContent sx={{ flex: 1, fontFamily: "Arial", backgroundImage: 'linear-gradient(0deg,#0000,#0000), url("images/patient.jpg")', backgroundSize: 'cover', backgroundPosition:'top' }}>
      <Typography component="h1" variant="h4" sx={boldRaleway}>
        Register as a Patient
      </Typography>
      <Typography variant="h5" paragraph sx={raleway}>
        Sign Up to book appointments with doctors
      </Typography>
      <Button sx={button} href="/patient_signup">
        Sign Up
      </Button>
      <Button sx={button} href="/patient_signin">
        Sign In
      </Button>
    </CardContent>
  </Card>
</CardActionArea>

      </Grid>

      {/* ADMIN LOGIN */}
      <Grid item xs={6}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1, fontFamily: "Arial", backgroundColor:'#292929', backgroundSize: 'cover', backgroundPosition:'center' }}>
              <Typography component="h1" color={"#fff"} variant="h4" sx={boldRaleway}>
                Sign in as an Admin
              </Typography>
              <Typography variant="h5" color={"#fff"} paragraph sx={raleway}>
                Only verified admins of medconnect can login using the email ID
                provided to them
              </Typography>

              <Button sx={button}  href="/admin_signin">
                Sign In
              </Button>
            </CardContent>

         
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
};

export default Register;
