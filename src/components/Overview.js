// import React from "react";
// import { Box, Typography, Button, Grid, Badge } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import TvIcon from '@mui/icons-material/Tv';
// import BuildIcon from '@mui/icons-material/Build';
// import PermScanWifiIcon from '@mui/icons-material/PermScanWifi';
// import HistoryIcon from '@mui/icons-material/History';
// import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// const useStyles = makeStyles((theme) => ({
//   headerContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 2,
//   },
//   applicationsHeading: {
//     marginRight: 2,
//   },
//   environmentText: {
//     color: "#333333",
//   },
// }));

// function IconTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
//       <Tab
//         icon={<TvIcon style={{ marginRight: 8 }} />}
//         label={<span>Overview</span>}
//         style={{ flexDirection: 'row' }}
//       />
//       <Tab
//         icon={<BuildIcon style={{ marginRight: 8 }} />}
//         label={<span>Environment Variables</span>}
//         style={{ flexDirection: 'row' }}
//       />
//       <Tab
//         icon={
//           <Badge color="error" variant="dot">
//             <PermScanWifiIcon style={{ marginRight: 8 }} />
//           </Badge>
//         }
//         label={<span>Alerts</span>}
//         style={{ flexDirection: 'row' }}
//       />
//       <Tab
//         icon={<HistoryIcon style={{ marginRight: 8 }} />}
//         label={<span>Event History</span>}
//         style={{ flexDirection: 'row' }}
//       />
//     </Tabs>
//   );
// }

// const Overview = () => {
//   const classes = useStyles();

//   return (
//     <>
//       <Box className={classes.headerContainer} style={{ display: "contents" }}>
//         <Typography variant="h5">tic-tac-toe</Typography>
//         <IconTabs />
//       </Box>
//       <Box
//         sx={{
//           backgroundColor: "white",
//           padding: 2,
//           borderRadius: 1,
//           boxShadow: 1,
//           marginBottom: 2,
//         }}
//       >
//         <Typography variant="h6">Service info</Typography>
//         <Grid container spacing={2} sx={{ marginBottom: 2 }}>
//           <Grid item xs={6}>
//             <Typography variant="body2" color="textSecondary">
//               Current version
//             </Typography>
//             <Typography variant="body1" style={{ display: "flex" }}>
//               <CheckCircleOutline
//                 style={{
//                   color: "green",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   flexDirection: "column",
//                 }}
//               />{" "}
//               In sync
//             </Typography>
//           </Grid>
//           <Grid item xs={6}>
//             <Typography variant="body2" color="textSecondary">
//               Desired version
//             </Typography>
//             <Typography variant="body1">1.2.1</Typography>
//           </Grid>
//         </Grid>
//         <Button variant="contained" color="primary">
//           Deploy
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default Overview;


import React from "react";
import { Box, Typography, Button, Grid, Badge } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TvIcon from '@mui/icons-material/Tv';
import BuildIcon from '@mui/icons-material/Build';
import PermScanWifiIcon from '@mui/icons-material/PermScanWifi';
import HistoryIcon from '@mui/icons-material/History';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, useTabContext } from "../TabContext";

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
  const { selectedTab, setSelectedTab } = useTabContext();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Tabs value={selectedTab} onChange={handleChange} aria-label="icon tabs example">
      <Tab
        icon={<TvIcon style={{ marginRight: 8 }} />}
        label={<span>Overview</span>}
        style={{ flexDirection: 'row' }}
      />
      <Tab
        icon={<BuildIcon style={{ marginRight: 8 }} />}
        label={<span>Environment Variables</span>}
        style={{ flexDirection: 'row' }}
      />
      <Tab
        icon={
          <Badge color="error" variant="dot">
            <PermScanWifiIcon style={{ marginRight: 8 }} />
          </Badge>
        }
        label={<span>Alerts</span>}
        style={{ flexDirection: 'row' }}
      />
      <Tab
        icon={<HistoryIcon style={{ marginRight: 8 }} />}
        label={<span>Event History</span>}
        style={{ flexDirection: 'row' }}
      />
    </Tabs>
  );
}

const Overview = () => {
  const classes = useStyles();
  const { selectedTab } = useTabContext();

  return (
    <>
      <Box className={classes.headerContainer} style={{ display: "contents" }}>
        <Typography variant="h5">tic-tac-toe</Typography>
        <IconTabs />
      </Box>
      {selectedTab === 0 ? (
        <>
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
      ) : (
         ''
      )}
    </>
  );
};

export default Overview;
