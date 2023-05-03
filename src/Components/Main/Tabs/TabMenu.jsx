import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import CryptoCards from "../Cards/CryptoCards";
import { Tabs, Tab, Typography, Box } from "@mui/material";

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
}));

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

  return (
    <Box sx={{ width: "100%", py: 1.5 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab className={classes.fonts} label="Explore" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box>
          <CryptoCards />
        </Box>
      </TabPanel>
    </Box>
  );
}
