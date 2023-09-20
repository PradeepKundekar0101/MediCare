// NAVBAR SECTION

export const titleToolbar = {
  borderBottom: 1,
  borderColor: "divider",
  backgroundColor: "#27ae60",
  color: "#ffffff",
};

export const title = {
  flex: 1,
  fontWeight: "bold",
  fontFamily: "Arial",
  letterSpacing:"2px",
  padding:"30px 0px"
};

export const navbarToolbar = {
  justifyContent: "space-between",
  overflowX: "auto",
  backgroundColor: "green",
};

export const link = {
  p: 1,
  flexShrink: 0,
  textDecoration: "none",
  color: "#3284be",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontFamily: "Arial",
  "&:hover": {
    backgroundColor: "#3284be",
    color: "#ffffff",
  },
};

// HEADER SECTION

export const headerPaper = {
  position: "relative",
  backgroundColor: "grey.800",
  color: "#fff",
  mb: 4,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: `url('https://cdn.wallpapersafari.com/96/49/sWbHxO.jpg')`,
};

export const headerBox = {
  position: "relative",
  display:"flex",
  justifyContent:"center",
  flexDirection:"column",
  alignItems:"center",
  height:"60vh",
  p: { xs: 5, md: 6 },
  pr: { md: 0 },
};

export const raleway = {
  fontFamily: "Arial",
};

// REGISTER SECTION

export const button = {
  backgroundColor: "#16a085",
  color: "#ffffff",
  margin: "1%",
  fontFamily: "Arial",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
};

export const cardMedia = {
  width: 160,
  display: { xs: "none", sm: "block" },
};

export const boldRaleway = {
  fontFamily: "Arial",
  fontWeight: "bold",
};

// ABOUT SECTION

export const description = {
  fontFamily: "Arial",
  marginBottom: "3vh",
  textAlign:"center",
  padding:"100px 0px"
};

export const aboutPaper = {
  position: "relative",
  backgroundColor: "grey.800",
  color: "#fff",
  mb: 4,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: ` linear-gradient(0deg,#0008,#0008), url('https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80')`,
};

export const box = {
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,.3)",
};

export const subtitle = {
  fontFamily: "Arial",
  fontWeight: "bold",
  width:"100%"
  
  // fontStyle: "",
};

// TESTIMONIALS SECTION

export const message = {
  fontFamily: "Arial",
  fontStyle: "italic",
};

export const testimonialsTitle = {
  fontFamily: "Arial",
  paddingBottom: "2%",
  fontStyle: "italic",
  fontWeight: "bold",
};

export const card = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

// FOOTER SECTION

export const footerBox = {
  py: 1,
  backgroundColor: "#27ae60",
  color: "#ffffff",
};

export const iconButton = {
  color: "#ffffff",
  "&:hover": { fontWeight: "bold" },
};

export const footerTitle = {
  mt: 1,
  fontFamily: "Arial",
  fontWeight: "bold",
};

export const sendButton = {
  color: "#3284be",
  backgroundColor: "#ffffff",
  fontFamily: "Arial",
  fontWeight: "bold",
};
