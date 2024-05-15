import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab  } from '@mui/material';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 1,
    boxShadow: 1,
  },
  tab: {
    '&.Mui-selected': {
      color: '#6E27d5',
      fontWeight: 700,
      borderBottom: `3px solid #6E27d5`,
    },
  },
}));

const cpuData = {
  labels: ['8:24 AM', '8:26 AM', '8:28 AM', '8:30 AM', '8:32 AM', '8:34 AM', '8:36 AM', '8:38 AM'],
  datasets: [
    {
      label: 'qdrant-test-public',
      data: [0.32, 0.33, 0.34, 0.35, 0.35, 0.36, 0.35, 0.35],
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.2)',
    },
  ],
};

const memoryData = {
  labels: ['10:00am', '10:15am', '10:30am', '10:40am', '11:00am'],
  datasets: [
    {
      label: 'tic-tac-toe',
      data: [30, 32, 35, 33, 34],
      borderColor: 'purple',
      backgroundColor: 'rgba(128, 0, 128, 0.2)',
    },
    {
      label: 'chess',
      data: [60, 62, 65, 63, 66],
      borderColor: 'orange',
      backgroundColor: 'rgba(255, 165, 0, 0.2)',
    },
    {
      label: 'sudoku',
      data: [20, 21, 19, 22, 20],
      borderColor: 'lightblue',
      backgroundColor: 'rgba(173, 216, 230, 0.2)',
    },
    {
      label: 'lorem',
      data: [10, 12, 11, 13, 14],
      borderColor: 'green',
      backgroundColor: 'rgba(0, 128, 0, 0.2)',
    },
    {
      label: 'ipsem',
      data: [15, 17, 18, 16, 19],
      borderColor: 'pink',
      backgroundColor: 'rgba(255, 192, 203, 0.2)',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const SystemMetrics = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const classes = useStyles();


  return (
    <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 1, boxShadow: 1 }} className={classes.root}>
      <Typography variant="h6" gutterBottom style={{fontWeight: 700, color: "#595959"}}>System metrics</Typography>
      <Tabs value={tabIndex} onChange={handleTabChange} aria-label="system metrics tabs" variant="fullWidth"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#6E27d5",
            height: 3
          }
        }}

      >
        <Tab label="CPU" sx={{ fontWeight: 700}}         
        textColor={{
          style: {
            color: "#6E27d5"
          }
        }}/>
        <Tab label="Memory" sx={{ fontWeight: 700}}/>
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        <Typography variant="body1" gutterBottom>CPU Utilization (%)</Typography>
        <Box sx={{ height: 300 }}>
          <Line data={cpuData} options={options} />
        </Box>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <Typography variant="body1" gutterBottom>Memory</Typography>
        <Box sx={{ height: 300 }}>
          <Line data={memoryData} options={options} />
        </Box>
      </TabPanel>
    </Box>
  );
};

export default SystemMetrics;

