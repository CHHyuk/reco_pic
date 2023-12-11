import React from 'react';
import { TextField } from '@mui/material';

const UrlComponent = ({ urlValue }) => (
  <TextField
    id="outlined-read-only-input"
    label="URL"
    value={urlValue}
    InputProps={{
      readOnly: true,
    }}
    className='url_textfield'
  />
);

export default UrlComponent;
