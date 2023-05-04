import React from "react";
import { Box, Typography } from "@mui/material";
import HistoryTable from "./HistoryTable";

const History = () => {
  return (
    <React.Fragment>
      <Box>
        <Typography variant="h5" mb={1}>
          Your History
        </Typography>
        <Typography
          sx={{ color: "rgb(107, 114, 128)", fontWeight: "600" }}
          variant="subtitle"
        >
          Your transaction history for swap, withdrawal, and purchase will
          appear here.
        </Typography>
        <Box mt={4}>
          <HistoryTable />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default History;
