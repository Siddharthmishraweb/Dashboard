
import React from "react";
import { Box, Typography, Button, Grid, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TvIcon from '@mui/icons-material/Tv';
import {
  DownhillSkiingOutlined,
  CheckCircleOutline,
} from "@mui/icons-material"; 
import BuildIcon from '@mui/icons-material/Build';
import PermScanWifiIcon from '@mui/icons-material/PermScanWifi';
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  applicationsHeading: {
    marginRight: 2,
  },
  environmentText: {
    color: "#333333",
  },
}));

function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab wrapped icon={<TvIcon />} label="Overview" />
      <Tab icon={<BuildIcon />} label="Environment Variables" />
      <Tab icon={<PermScanWifiIcon />} label="Alerts" />
      <Tab icon={<AccessAlarmIcon />} label="Event History" />
    </Tabs>
  );
}

const Overview = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.headerContainer} style={{display: "contents"}}>
        <Typography variant="h5">tic-tac-toe</Typography>
        <IconTabs />
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          padding: 2,
          borderRadius: 1,
          boxShadow: 1,
          marginBottom: 2,
        }}
      >
        <Typography variant="h6">Service info</Typography>
        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Current version
            </Typography>
            <Typography variant="body1" style={{ display: "flex" }}>
              <CheckCircleOutline
                style={{
                  color: "green",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              />{" "}
              In sync
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Desired version
            </Typography>
            <Typography variant="body1">1.2.1</Typography>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary">
          Deploy
        </Button>
      </Box>
    </>
  );
};

export default Overview;
