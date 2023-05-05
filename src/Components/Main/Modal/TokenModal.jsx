import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import { useBalance } from "wagmi";
import { getAccount } from "@wagmi/core";

import gas from "../../../assets/gas.png";
import BuyFinal from "./BuyFinal";
import closeIcon from "../../../assets/close.png";

import useStyles from "../../styles";

const TokenModal = ({
  isOpen,
  handleClose,
  cryptoTitle,
  img1,
  img2,
  value1,
  value2,
  value,
}) => {
  const classes = useStyles();

  const account = getAccount();

  const { data, isError, isLoading } = useBalance({
    address: account.address,
  });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;

  const [openBuyFinal, setopenBuyFinal] = React.useState(false);
  const [openBuyModal, setOpenBuyModal] = React.useState(false);
  const handleopenBuyFinal = () => {
    setopenBuyFinal(true);
    setOpenBuyModal(true);
    setTimeout(() => {
      setOpenBuyModal(false);
    }, 2000);
  };

  const handleBuyFinalClose = () => setopenBuyFinal(false);
  const handleBuyModalClose = () => setOpenBuyModal(false);

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
              {cryptoTitle} Index
            </Typography>
            <Button onClick={handleClose}>
              <img src={closeIcon} />
            </Button>
          </Box>
          <Box className={classes.flexDisplay} gap={3} flexWrap="wrap">
            <Typography className={classes.fonts} variant="h4">
              {value * 0.9880866393888882} <br /> {data?.symbol}
            </Typography>
            <Box mt={2}>
              <Typography variant="subtitle1" className={classes.font}>
                <img src={gas} />
                &nbsp;Network Fees
              </Typography>
              <Typography variant="h6" className={classes.font}>
                255657374071 <br /> Wei
              </Typography>
            </Box>
          </Box>

          <Box mt={3}>
            <Typography variant="subtitle2" className={classes.fonts}>
              Token Composition
            </Typography>
            <Box display="flex" flexDirection="column" gap={1} mt={1}>
              <Box className={classes.boxStyle}>
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={2}
                  >
                    <Box display="flex" alignItems="center" gap={2}>
                      <img
                        src={img1}
                        alt={cryptoTitle}
                        width="32"
                        height="32"
                      />
                      <Box display="inline" justifyItems="flex-start">
                        <Typography
                          variant="subtitle2"
                          className={classes.fonts}
                        >
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
                      <Typography variant="body1" className={classes.fonts}>
                        {value1}%
                      </Typography>
                      <Typography variant="body1">
                        {((value1 * 0.000033814735518258446) / 100).toFixed(9)}
                      </Typography>
                    </Box>
                    <Box>
                      <Button className={classes.btn2} onClick={handleClose}>
                        Edit
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.boxStyle}>
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={2}
                  >
                    <Box display="flex" alignItems="center" gap={2}>
                      <img
                        src={img2}
                        alt={cryptoTitle}
                        width="32"
                        height="32"
                      />
                      <Box display="inline" justifyItems="flex-start">
                        <Typography
                          variant="subtitle2"
                          className={classes.fonts}
                        >
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
                      <Typography variant="body1" className={classes.fonts}>
                        {value2}%
                      </Typography>
                      <Typography variant="body1">
                        {((value2 * 0.000033814735518258446) / 100).toFixed(9)}
                      </Typography>
                    </Box>
                    <Box>
                      <Button className={classes.btn2} onClick={handleClose}>
                        Edit
                      </Button>
                    </Box>
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
              <Button className={classes.btn2} onClick={handleClose}>
                Back
              </Button>
              <Button className={classes.btn1} onClick={handleopenBuyFinal}>
                Buy
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      {openBuyModal && (
        <Modal
          open={openBuyModal}
          onClose={handleBuyModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={classes.boxSize}>
            <BuyFinal
              isOpen={openBuyFinal}
              handleClose={handleBuyFinalClose}
              cryptoTitle={cryptoTitle}
            />
          </Box>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default TokenModal;
