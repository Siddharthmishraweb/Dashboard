import React from 'react';
import { Box, Typography, Grid, Chip, Link } from '@mui/material';

const events = [
  { event: 'Deploy', version: '1.2.1', status: 'In progress', time: '1 minute ago' },
  { event: 'Deploy', version: '1.2.1', status: 'Successful', time: '5 hours ago' },
  { event: 'Uninstall', version: '1.2.0', status: 'Failed', time: '2 hours ago' },
  { event: 'Deploy', version: '1.2.0', status: 'Failed', time: '3 hours ago' },
  { event: 'Deploy', version: '1.2.1', status: 'In progress', time: '2 minute ago' },
];

const statusStyles = {
  'In progress': { bgcolor: '#FFF3E0', color: '#FFB74D', borderColor: '#FFB74D' , borderRadius: "10px", padding: "0px 7px"},
  'Successful': { bgcolor: '#E8F5E9', color: '#66BB6A', borderColor: '#66BB6A' , borderRadius: "10px" , padding: "0px 7px"},
  'Failed': { bgcolor: '#FFEBEE', color: '#EF5350', borderColor: '#EF5350', borderRadius: "10px", width: "auto", padding: "0px 7px" },
};

const EventHistory = () => {
  return (
    <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 1, boxShadow: 1, height: "100%" }}>
      <Typography variant="h6" gutterBottom style={{fontWeight: 700, color: "#595959", padding: "4px 0px 14px 0px"}}>Event History</Typography>
      <Grid container sx={{ borderBottom: '1px solid #e0e0e0', pb: 1 }}>
        <Grid item xs={4}>
          <Typography variant="subtitle2" fontWeight="bold">Event</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle2" fontWeight="bold">Version</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle2" fontWeight="bold">Status</Typography>
        </Grid>
      </Grid>
      {events.map((event, index) => (
        <Grid container key={index} sx={{ py: 1, ...(index !== events.length - 1 && { borderBottom: '1px solid #e0e0e0' }), alignItems: 'center' }}>
          <Grid item xs={4}>
            <Typography variant="body2">{event.event}</Typography>
            <Typography variant="caption" color="textSecondary">{event.time}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">{event.version}</Typography>
          </Grid>
          <Grid item xs={4} sx={{display: "flex"}}>
            <Chip
              label={event.status}
              sx={{
                ...statusStyles[event.status],
                border: 1,
                display: 'flex',
                alignItems: 'center',
              }}
              variant="outlined"
              icon={<Box sx={{ width: 8, height: 8, bgcolor: statusStyles[event.status].color, borderRadius: '50%' }} />}
            />
          </Grid>
        </Grid>
      ))}
      <Box sx={{ textAlign: 'center', mt: 2 , display: "flex"}}>
        <Link href="#" underline="hover" style={{color:"#6E27D5"}}>View more</Link>
      </Box>
    </Box>
  );
};

export default EventHistory;
