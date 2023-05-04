import React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Slider,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import closeIcon from "../../../assets/close.png";

const useStyles = makeStyles(() => ({
  btn1: {
    backgroundColor: "#000 !important",
    color: "#fff !important",
    fontFamily: "Roboto",
    fontWeight: "600 !important",
    flex: 1,
    margin: "0 5px",
  },
  btn2: {
    backgroundColor: "#fff !important",
    color: "#000 !important",
    fontFamily: "Roboto",
    fontWeight: "600 !important",
    flex: 1,
    margin: "0 5px",
    border: "1px solid #ccc !important",
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
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "20px",
  },
  boxStyle: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
  },
}));

const BuyFinal = ({
  isOpen,
  handleOpenNext,
  handleClose,
  cryptoTitle,
  img1,
  img2,
  img3,
  value1,
  value2,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Modal
        open={isOpen}
        handleClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.boxSize}>
          <Box display="flex" justifyContent="space-between">
            <Typography
              className={classes.fonts}
              id="modal-modal-title"
              variant="h5"
            >
              Confirm {cryptoTitle}
            </Typography>
            <Button onClick={handleClose}>
              <img src={closeIcon} />
            </Button>
          </Box>
          <Box mt={2}>
            <Typography
              variant="caption1"
              className={classes.fonts}
              color="rgba(60, 66, 66, 0.6) !important"
            >
              Processing Transaction...
            </Typography>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default BuyFinal;
