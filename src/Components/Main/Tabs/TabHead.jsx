import React from "react";
import { Typography, Box } from "@mui/material";
import { getAccount } from "@wagmi/core";
import { makeStyles } from "@material-ui/styles";
import { useBalance } from "wagmi";

const useStyles = makeStyles(() => ({
  btn: {
    backgroundColor: "#000 !important",
  },
  fonts: {
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: "600 !important",
    color: "#000 !important",
    textTransform: "none !important",
  },
  flexDisplay: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));

const TabHead = () => {
  const classes = useStyles();

  const account = getAccount();

  const { data, isError, isLoading } = useBalance({
    address: account.address,
  });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;

  return (
    <React.Fragment>
      <Box className={classes.flexDisplay} mt={4} mb={4} gap={6}>
        <Box className={classes.flexDisplay} gap={4}>
          <img src="https://test.joinclamp.com/assets/default-profile.svg" />
          <Typography
            variant="h4"
            className={classes.fonts}
            pr={5}
            sx={{
              textDecoration: "underline",
              borderRight: "1px solid #ccc",
            }}
          >
            Make your first transaction <br />
            to reveal address
          </Typography>
        </Box>
        <Box>
          <Typography
            className={classes.fonts}
            variant="h6"
            sx={{ fontWeight: "500 !important" }}
          >
            Net Worth
          </Typography>
          <Typography className={classes.fonts} variant="h6">
            {data?.formatted} {data?.symbol}
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default TabHead;
