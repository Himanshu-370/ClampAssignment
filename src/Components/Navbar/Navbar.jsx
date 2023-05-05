import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/logo.png";
import ConnectBtn from "../ConnectBtn/ConnectBtn";

const useStyles = makeStyles(() => ({
  btn: {
    backgroundColor: "#000 !important",
    textTransform: "none !important",
    fontWeight: "600 !important",
    fontSize: "15px !important",
  },
  fonts: {
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: "600",
  },
  flexDisplay: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buyNowBtn: {
    backgroundColor: "#000 !important",
    color: "#fff !important",
    width: "100%",
    fontFamily: "Roboto",
    fontWeight: "600 !important",
    padding: "8px 15px !important",
    borderRadius: "5px !important",
    textTransform: "none !important",
    fontSize: "16px !important",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box sx={{ py: 4.5, borderBottom: "1px solid #cccc" }}>
        <Grid container justifyContent="space-between">
          <Grid item xs={11.5}>
            <Box className={classes.flexDisplay}>
              <Box className={classes.flexDisplay} gap={1.5}>
                <img src={logo} width="40" height="40" />
                <Typography variant="subtitle" className={classes.fonts}>
                  <Link href="/" color="inherit" underline="none">
                    clamp
                  </Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.4,
                  alignItems: "flex-end",
                }}
              >
                <ConnectBtn />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
