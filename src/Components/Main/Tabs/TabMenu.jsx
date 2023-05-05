import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box } from "@mui/material";
import { useAccount } from "wagmi";

import TabHead from "./TabHead";
import History from "./History";
import WatchList from "./WatchList";
import Dashboard from "./Dashboard";
import CryptoCards from "../Cards/CryptoCards";

import useStyles from "../../styles";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ mt: 2 }}>
          <div style={{ fontFamily: "Roboto" }}>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { isConnected } = useAccount();

  return (
    <Box sx={{ width: "100%", py: 1.5 }}>
      {isConnected ? <TabHead /> : ""}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab
            key={0}
            className={classes.fonts}
            label="Explore"
            {...a11yProps(0)}
          />
          {isConnected && [
            <Tab
              key={1}
              className={classes.fonts}
              label="Dashboard"
              {...a11yProps(1)}
            />,
            <Tab
              key={2}
              className={classes.fonts}
              label="History"
              {...a11yProps(2)}
            />,
            <Tab
              key={3}
              className={classes.fonts}
              label="Watchlist"
              {...a11yProps(3)}
            />,
          ]}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          sx={{ border: "1px solid #ccc", p: 3, borderRadius: 1.5, mb: 2.5 }}
        >
          <CryptoCards />
        </Box>
      </TabPanel>
      {isConnected && (
        <>
          <TabPanel value={value} index={1}>
            <Box
              sx={{
                border: "1px solid #ccc",
                p: 3,
                borderRadius: 1.5,
                mb: 2.5,
              }}
            >
              <Dashboard />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box
              sx={{
                border: "1px solid #ccc",
                p: 3,
                borderRadius: 1.5,
                mb: 2.5,
              }}
            >
              <History />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Box
              sx={{
                border: "1px solid #ccc",
                p: 3,
                borderRadius: 1.5,
                mb: 2.5,
              }}
            >
              <WatchList />
            </Box>
          </TabPanel>
        </>
      )}
    </Box>
  );
}
