import { createTheme } from "@mui/material/styles";

const theme = createTheme();

export const container = {
  mt: "12vh",
  ml: "5vw",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #dff6fe 30%, #0095de 90%)",
  backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80')`,
  backgroundPosition: "center",
  backgroundRepeat: "repeat-x",
  backgroundSize: "cover",
  [theme.breakpoints.down("md")]: {
    mt: "10vh",
    ml: "10vw",
    maxWidth: "95vw",
  },
  [theme.breakpoints.down("sm")]: {
    ml: "12vw",
    maxWidth: "80vw",
  },
};

export const paper = {
  p: 2,
  display: "flex",
  flexDirection: "column",
};

export const transparentPaper = {
  p: 2,
  display: "flex",
  flexDirection: "column",
  background: "transparent",
};

export const upload = {
  height: "100%",
  p: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const avatar = {
  width: 200,
  height: 200,
};

export const listItem = {
 
  borderRadius: "10px",
  margin: "20px 0px",
  boxShadow: 0,
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#fff",
    boxShadow: 3,
    
  },
};

export const typography = { fontWeight: "bold", color: "#fff" };

export const confirmButton = {
  backgroundColor: "#009900",
  "&:hover": {
    backgroundColor: "#006600",
  },
};

export const cancelButton = {
  backgroundColor: "#e60000",
  "&:hover": {
    backgroundColor: "#b30000",
  },
};

export const signinGrid = {
  backgroundImage: `url('https://wallpaperaccess.com/full/3275630.jpg')`,
  backgroundRepeat: "no-repeat",
  backgroundColor: (t) =>
    t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const signupGrid = {
  backgroundImage: `url("https://wallpaperaccess.com/full/3275630.jpg")`,
  backgroundRepeat: "no-repeat",
  backgroundColor: (t) =>
    t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const box = {
  my: 8,
  mx: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const controls = {
  top: "auto",
  bottom: 0,
  backgroundColor: "#021117",
  alignItems: "center",
};

export const controlsToolbar = {
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "0",
    marginLeft: "0",
  },
};
