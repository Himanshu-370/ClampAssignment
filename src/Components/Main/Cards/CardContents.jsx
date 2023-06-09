import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import upright from "../../../assets/upright.png";
import BuyModal from "../Modal/BuyModal";

import useStyles from "../../styles";

export default function CryptoCards({
  cryptoTitle,
  cryptoChange,
  topbarBG1,
  topbarBG2,
  topbarBG3,
  img1,
  img2,
  img3,
}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { isConnected } = useAccount();

  return (
    <React.Fragment>
      <Card sx={{ minWidth: 275, border: "1px solid #ccc" }}>
        <Box display="flex">
          <Box
            style={{
              width: "100%",
              backgroundColor: `${topbarBG1}`,
              height: "8px",
            }}
          ></Box>
          <Box
            style={{
              width: "100%",
              backgroundColor: `${topbarBG2}`,
              height: "8px",
            }}
          ></Box>
          {topbarBG3 && (
            <Box
              style={{
                width: "100%",
                backgroundColor: `${topbarBG3}`,
                height: "8px",
              }}
            ></Box>
          )}
        </Box>
        <CardContent>
          <Typography className={classes.tabs} variant="h6" component="div">
            {cryptoTitle}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            mt={2.5}
          >
            <Box
              className={classes.CardContentflexDisplay}
              alignItems="flex-start"
              justifyContent="space-evenly"
              gap={1}
            >
              <Typography variant="caption" color="text.secondary">
                Underlying Tokens
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={1}
              >
                <img src={img1} width="24" height="24" />
                <img src={img2} width="24" height="24" />
                {img3 && <img src={img3} width="24" height="24" />}
              </Box>
            </Box>
            <Box className={classes.CardContentflexDisplay}>
              <Typography variant="caption" color="text.secondary">
                Price Change <br /> (in 24hrs)
              </Typography>
              <Box
                className={classes.CardContentflexDisplay}
                flexDirection="row"
                alignItems="center"
                gap={0.5}
              >
                <img src={upright} width="20" height="20" />
                <Typography
                  className={classes.tabs}
                  variant="h6"
                  color="text.secondary"
                  display="flex"
                >
                  {cryptoChange}%
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Box width="100%">
            {isConnected ? (
              <Button
                fullWidth
                className={classes.buyNowBtn}
                onClick={handleOpen}
              >
                Buy
              </Button>
            ) : (
              <ConnectButton.Custom>
                {({ openConnectModal }) => (
                  <Button
                    fullWidth
                    className={classes.buyNowBtn}
                    onClick={openConnectModal}
                  >
                    Buy
                  </Button>
                )}
              </ConnectButton.Custom>
            )}

            <BuyModal
              isOpen={open}
              handleClose={handleClose}
              cryptoTitle={cryptoTitle}
              img1={img1}
              img2={img2}
            />
          </Box>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
