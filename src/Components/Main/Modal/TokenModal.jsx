import { Modal, Box, Typography } from "@mui/material";
import React from "react";

const TokenModal = ({ isOpen, handleOpenNext, handleClose }) => {
  return (
    <React.Fragment>
      <Modal
        open={isOpen}
        handleClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default TokenModal;
