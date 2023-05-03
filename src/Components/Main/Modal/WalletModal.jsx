import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
// import { Close as CloseIcon } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  btn: {
    backgroundColor: "#000 !important",
  },
  fonts: {
    fontFamily: "Roboto",
    fontWeight: "600 !important",
    backgroundColor: "#fff !important",
    border: "none !important",
    boxShadow: "none !important",
    textTransform: "none !important",
  },
  buttonStyle: {
    fontFamily: "Roboto",
    fontWeight: "600 !important",
    color: "#000 !important",
    backgroundColor: "#fff !important",
    border: "none !important",
    boxShadow: "none !important",
    textTransform: "none !important",
    "&:hover": {
      backgroundColor: "#ccc !important",
    },
  },
  flexDisplay: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxSize: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "20px",
  },
}));

const WalletModal = ({ isOpen, handleClose, handleOpen }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.boxSize}>
          <Box display="flex" justifyContent="space-between">
            <Typography
              className={classes.fonts}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Connect a Wallet
            </Typography>
            <Button onClick={handleClose}>Close</Button>
          </Box>
          <Typography
            className={classes.fonts}
            variant="caption"
            sx={{ mt: 2, color: "rgba(60, 66, 66, 0.6)" }}
          >
            Recommended
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
          >
            <Button
              className={classes.buttonStyle}
              variant="contained"
              sx={{ mt: 2 }}
            >
              MetaMask
            </Button>
            <Button
              className={classes.buttonStyle}
              variant="contained"
              sx={{ mt: 2 }}
            >
              MetaMask
            </Button>
            <Button
              className={classes.buttonStyle}
              variant="contained"
              sx={{ mt: 2 }}
            >
              MetaMask
            </Button>
            <Button
              className={classes.buttonStyle}
              variant="contained"
              sx={{ mt: 2 }}
            >
              MetaMask
            </Button>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 2 }}
          >
            <Typography
              className={classes.fonts}
              sx={{ color: "rgba(60, 66, 66, 0.6)" }}
              variant="caption"
            >
              New to Ethereum wallets?
            </Typography>
            <Button
              className={classes.fonts}
              sx={{ color: "rgba(60, 66, 66, 0.6)" }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default WalletModal;
