import React from "react";
import { Box, Grid, Typography, Button, Link } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/logo.png";
import { Web3Button } from "@web3modal/react";

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
}));

const Navbar = () => {
  const classes = useStyles();

  // const [isOpen, setIsOpen] = React.useState(false);
  // const handleOpen = () => setIsOpen(true);
  // const handleClose = () => setIsOpen(false);

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
                <Web3Button icon="hide" label="Connect Wallet" />
                {/* <Button className={classes.btn} onClick={handleOpen}>
                  Connect Wallet
                </Button> */}
                {/* <WalletModal isOpen={isOpen} handleClose={handleClose} /> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
