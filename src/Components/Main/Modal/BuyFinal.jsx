import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";

import closeIcon from "../../../assets/close.png";

import useStyles from "../../styles";

const BuyFinal = ({ isOpen, handleClose, cryptoTitle }) => {
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
