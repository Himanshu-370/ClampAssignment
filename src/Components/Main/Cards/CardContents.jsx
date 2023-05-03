import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import upright from "../../../assets/upright.png";
import WalletModal from "../Modal/WalletModal";
import { Web3Button } from "@web3modal/react";

const useStyles = makeStyles(() => ({
  btn: {
    backgroundColor: "#000 !important",
  },
  fonts: {
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: "600",
  },
  tabs: {
    fontFamily: "Roboto",
    fontWeight: "600 !important",
  },
  buyNowBtn: {
    backgroundColor: "#000 !important",
    color: "#fff !important",
    width: "100%",
    fontFamily: "Roboto",
    fontWeight: "600 !important",
  },
  flexDisplay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
}));

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

  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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
              className={classes.flexDisplay}
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
            <Box className={classes.flexDisplay}>
              <Typography variant="caption" color="text.secondary">
                Price Change <br /> (in 24hrs)
              </Typography>
              <Box
                className={classes.flexDisplay}
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
            <Web3Button fullWidth icon="hide" label="Buy" />
          </Box>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
