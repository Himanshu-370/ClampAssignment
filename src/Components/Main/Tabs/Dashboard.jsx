import React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Typography variant="h5" mb={1}>
        Your Dashboard
      </Typography>
      <Typography
        sx={{ color: "rgb(107, 114, 128)", fontWeight: "600" }}
        variant="subtitle"
      >
        Manage all the indexes you've bought from one place.
      </Typography>
    </React.Fragment>
  );
};

export default Dashboard;
