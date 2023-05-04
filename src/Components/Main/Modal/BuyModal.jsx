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
import TokenModal from "./TokenModal";
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

const BuyModal = ({ isOpen, handleClose, cryptoTitle, img1, img2, img3 }) => {
  const classes = useStyles();

  const [amount, setAmount] = React.useState(1);
  const [slider1, setSlider1] = React.useState(50);
  const [slider2, setSlider2] = React.useState(50);
  const [reset, setReset] = React.useState(50);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSlider1Change = (event) => {
    const newSlider1 = event.target.value;
    const newSlider2 = 100 - newSlider1;
    setSlider1(newSlider1);
    setSlider2(newSlider2);
  };

  const handleSlider2Change = (event) => {
    const newSlider2 = event.target.value;
    const newSlider1 = 100 - newSlider2;
    setSlider2(newSlider2);
    setSlider1(newSlider1);
  };

  const handleResetButton = (e) => {
    setSlider1(reset);
    setSlider2(reset);
    setAmount(1);
  };

  const [openNext, setOpenNext] = React.useState(false);
  const handleOpenNext = () => {
    setOpenNext(true);
  };
  const handleCloseNext = () => setOpenNext(false);

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
              variant="h5"
            >
              {cryptoTitle} Index
            </Typography>
            <Button onClick={handleClose}>
              <img src={closeIcon} />
            </Button>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Typography
              className={classes.fonts}
              variant="caption"
              sx={{ color: "rgba(60, 66, 66, 0.6)" }}
            >
              Enter Amount (in $)
            </Typography>
            <TextField
              id="outlined-size-small"
              defaultValue="1"
              size="small"
              fullWidth
              value={amount}
              onChange={handleAmountChange}
            />
            <Typography className={classes.fonts} variant="caption" mt={1}>
              Amount in Matic (approx.)
            </Typography>
            <Typography
              className={classes.fonts}
              sx={{ fontWeight: "400 !important" }}
              variant="body1"
            >
              {amount ? amount * 0.9880866393888882 : "NaN"}
            </Typography>
          </Box>

          <Box mt={3}>
            <Typography variant="subtitle2" className={classes.fonts}>
              Token Composition
            </Typography>
            <Box className={classes.flexDisplay} gap={2} mt={1}>
              <Box className={classes.boxStyle}>
                <Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <img src={img1} alt={cryptoTitle} width="32" height="32" />
                    <Box display="inline" justifyItems="flex-start">
                      <Typography variant="subtitle2" className={classes.fonts}>
                        {cryptoTitle}
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.fonts}
                        color="rgb(107, 114, 128)"
                      >
                        {cryptoTitle}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Slider
                      valueLabelDisplay="auto"
                      aria-label="custom thumb label"
                      defaultValue={20}
                      value={slider1}
                      onChange={handleSlider1Change}
                    />
                    <Typography variant="caption" className={classes.fonts}>
                      {slider1
                        ? (slider1 * 0.000033814735518258446) / 100
                        : "NaN"}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.boxStyle}>
                <Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <img src={img2} alt={cryptoTitle} width="32" height="32" />
                    <Box display="inline" justifyItems="flex-start">
                      <Typography variant="subtitle2" className={classes.fonts}>
                        {cryptoTitle}
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.fonts}
                        color="rgb(107, 114, 128)"
                      >
                        {cryptoTitle}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Slider
                      valueLabelDisplay="auto"
                      aria-label="custom thumb label"
                      defaultValue={20}
                      value={slider2}
                      onChange={handleSlider2Change}
                    />
                    <Typography variant="caption" className={classes.fonts}>
                      {slider2
                        ? (slider2 * 0.000033814735518258446) / 100
                        : "NaN"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              fullWidth
              alignItems="center"
              gap={2}
              mt={2}
            >
              <Button className={classes.btn2} onClick={handleResetButton}>
                Reset Compositions
              </Button>
              <Button
                className={classes.btn1}
                onClick={() => {
                  handleOpenNext();
                }}
              >
                Next
              </Button>
              <TokenModal
                isOpen={openNext}
                handleClose={handleCloseNext}
                cryptoTitle={cryptoTitle}
                img1={img1}
                img2={img2}
                img3={img3}
                value1={slider1}
                value2={slider2}
                value={amount}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default BuyModal;
