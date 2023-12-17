import React from 'react';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const NotificationComponent = ({ open, onClose, severity, message }) => (
  <Snackbar open={open} autoHideDuration={10000} onClose={onClose} className='snackbar'>
    <MuiAlert onClose={onClose} severity={severity} className='alert'>
      {message}
    </MuiAlert>
  </Snackbar>
);

export default NotificationComponent;
