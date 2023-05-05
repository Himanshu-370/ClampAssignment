import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

import logo from "../../assets/logo.png";
import ConnectBtn from "../ConnectBtn/ConnectBtn";
import useStyles from "../styles";

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
