import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import LinkIcon from '@mui/icons-material/Link';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SecurityIcon from '@mui/icons-material/Security';

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, bgcolor: '#37146B', color: 'white', height: '100vh', padding: 2 }}>
      <Typography variant="h4" gutterBottom>O Kapstan</Typography>
      <Divider sx={{ bgcolor: '#4D1B95', width: "130%", marginLeft: "-15px" }} />
      <List>
        <ListItem button>
          <ListItemIcon>
            <AppsIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Applications" />
          
        </ListItem>
        <Divider sx={{ bgcolor: '#4D1B95', width: "110%", marginLeft: "-15px" }} />
        <ListItem button>
          <ListItemIcon>
            <LinkIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Connections" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AttachMoneyIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Cost" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SecurityIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Security" />
          <Box style={{backgroundColor: "#6E27D5", padding: "2px 6px", borderRadius: "5px"}}>
            <Typography>
               Beta
            </Typography>
          </Box>
        </ListItem>
      </List>
      <Divider sx={{ bgcolor: '#4D1B95', width: "110%", marginLeft: "-15px" }} />
    </Box>
  );
};

export default Sidebar;
