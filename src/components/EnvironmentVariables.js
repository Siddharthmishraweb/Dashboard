import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const EnvironmentVariables = () => {
  const [variables, setVariables] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddVariable = () => {
    if (name && value) {
      setVariables([...variables, { name, value }]);
      setName("");
      setValue("");
      setOpen(false);
    }
  };

  const handleDeleteVariable = (index) => {
    const updatedVariables = [...variables];
    updatedVariables.splice(index, 1);
    setVariables(updatedVariables);
  };

  return (
    <>
      <div style={{ backgroundColor: "white", minHeight: "50vh", padding: "20px" }}>
        <Typography variant="h5" style={{ fontWeight: "bold", display: "flex", justifyContent: "space-between" }}>
          Environment Variables
          <IconButton color="primary" onClick={handleOpen}>
            +
          </IconButton>
        </Typography>
        {variables.length === 0 ? (
          <Typography variant="body1">No environment variables</Typography>
        ) : (
          variables.map((variable, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <TextField
                disabled
                value={variable.name}
                sx={{ marginRight: 1 }}
              />
              <TextField
                disabled
                value={variable.value}
                sx={{ marginRight: 1 }}
              />
              <IconButton onClick={() => handleDeleteVariable(index)}>
                <DeleteIcon />
              </IconButton>
            </div>
          ))
        )}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Environment Variable</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the name and value of the environment variable.
          </DialogContentText>
          <Box display="flex" alignItems="center" marginBottom="8px">
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ marginRight: 1 }}
            />
            <TextField
              margin="dense"
              label="Value"
              fullWidth
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{ marginRight: 1 }}
            />
            <IconButton onClick={() => { setName(""); setValue(""); }}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddVariable} variant="contained" sx={{ bgcolor: "#6e27d5", color: "white" }}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EnvironmentVariables;
