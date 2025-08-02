import React, { useState } from 'react';
import { TextField, Button, Box, Snackbar, Alert } from '@mui/material';
import { log } from '../utils/logger';

const generateCode = () => Math.random().toString(36).substring(2, 8);

const URLForm = ({ onAdd }) => {
  const [longUrl, setLongUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [expiry, setExpiry] = useState(30);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!longUrl) {
      setError('Please enter a valid URL');
      log('FORM', 'ERROR', 'URLForm', 'URL input was empty');
      return;
    }

    const code = customCode || generateCode();
    const entry = {
      id: code,
      longUrl,
      expiry: Date.now() + expiry * 60000,
    };

    log('FORM', 'INFO', 'URLForm', `Generated short URL ${code} for ${longUrl}`);
    onAdd(entry);
    setLongUrl('');
    setCustomCode('');
    setExpiry(30);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        label="Enter Long URL"
        variant="outlined"
        fullWidth
        margin="normal"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <TextField
        label="Custom Short Code (optional)"
        variant="outlined"
        fullWidth
        margin="normal"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
      />
      <TextField
        label="Expiry (in minutes)"
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
        Shorten URL
      </Button>

      <Snackbar open={!!error} autoHideDuration={3000} onClose={() => setError('')}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </Box>
  );
};

export default URLForm;
