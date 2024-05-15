import React from 'react';
import { makeStyles } from '@mui/styles'; 
import { Box, Avatar, Typography, Button, Select, MenuItem, Divider } from '@mui/material';
import { DownhillSkiingOutlined, CheckCircleOutline } from '@mui/icons-material'; 

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  applicationsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2, 
  },
  applicationsHeading: {
    marginRight: 1, 
  },
  dropdownSelect: {
    padding: 1,
    fontSize: '1rem',
    cursor: 'pointer',
    outline: 'none',
    background: 'none', 
    border: 'none', 
    display: 'flex',
    alignItems: 'center',
    '&::after': {

      content: '""',
      display: 'inline-block',
      width: '0px',
      height: '0px',
      borderLeft: '5px solid transparent',
      borderRight: '5px solid red',
      borderTop: `8px solid red`, 
      marginLeft: 1, 
      position: 'relative',
      top: 2, 
    },
  },
  dropdownSelectFocused: {

    '&::after': {
      borderTopColor: 'red', 
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [selectedApplication, setSelectedApplication] = React.useState('');

  const handleChange = (event) => {
    setSelectedApplication(event.target.value);
  };

  return (
    <Box className={classes.applicationsContainer} style={{margin:"5px"}}>
      <Box style={{display: "flex", flexDirection: "column"}}> 
      <Typography variant="h5" className={classes.applicationsHeading}>
        Applications
      </Typography>
      <Typography variant="h7" className={classes.applicationsHeading} style={{display: "flex"}}>
        tick-tock-toe <KeyboardArrowDownIcon/>
      </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ bgcolor: '#ffcc00', color: 'black', marginRight: 1 }}>JD</Avatar>
        <Button startIcon={<DownhillSkiingOutlined />} variant="contained" sx={{ bgcolor: '#00c853' }}>
          Deployed
        </Button>
      </Box>
    </Box>
  );
};

const CustomInput = ({ classes, ...props }) => {
  const [focused, setFocused] = React.useState(false);

  const handleFocus = (event) => {
    setFocused(true);
  };

  const handleBlur = (event) => {
    setFocused(false);
  };

  return (
    <>
        <Box component="input" {...props} onFocus={handleFocus} onBlur={handleBlur} className={focused ? classes.dropdownSelectFocused : classes.dropdownSelect} />

          <Divider sx={{ bgcolor: '#4D1B95', width: "110%", marginLeft: "-15px" }} />

    </>
  );
};

export default Header;