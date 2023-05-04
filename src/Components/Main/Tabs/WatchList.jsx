import React from "react";
import { Box, Typography } from "@mui/material";

const WatchList = () => {
  return (
    <React.Fragment>
      <Box>
        <Typography variant="h5" mb={1}>
          Your Watchlist
        </Typography>
        <Typography
          sx={{ color: "rgb(107, 114, 128)", fontWeight: "600" }}
          variant="subtitle"
        >
          Saved Indexes would appear here. Refer them for future purpose.
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default WatchList;
