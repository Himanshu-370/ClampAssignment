import React from "react";
import { Typography, Box } from "@mui/material";
import { getAccount } from "@wagmi/core";
import { makeStyles } from "@material-ui/styles";
import { useBalance } from "wagmi";

import useStyles from "../../styles";

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
      <Box
        className={classes.flexDisplay}
        justifyContent="flex-start"
        mt={4}
        mb={4}
        gap={6}
        flexWrap="wrap"
      >
        <Box
          className={classes.flexDisplay}
          justifyContent="flex-start"
          gap={4}
          flexWrap="wrap"
        >
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
