import * as React from "react";
import { Link, Toolbar, Typography } from "@mui/material";
import { link, navbarToolbar, title, titleToolbar } from "./styles";

const Navbar = (props) => {
  const { sections } = props;

  return (
    <React.Fragment id="">
      {/* TITLE */}
      <Toolbar sx={titleToolbar}>
        <Typography
          variant="h3"
          color="inherit"
          align="center"
          noWrap
          sx={title}
        >
          MedConnect
        </Typography>
      </Toolbar>

    </React.Fragment>
  );
};

export default Navbar;
