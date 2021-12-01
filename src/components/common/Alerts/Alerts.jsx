import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Alerts = ({ open, severity, message, closeAlert }) => {

  const handleClose = (event, reason) => {
    if (reason) {
      closeAlert();
    }
  }

  return (
    <Snackbar
      open={open}
      sx={{ width: '100%', marginTop: '15px' }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  )
};

export default Alerts;
