import React from 'react';
import { Box, Paper, Typography, Link } from '@mui/material';

const URLList = ({ urls }) => {
  const now = Date.now();

  return (
    <Box>
      <Typography variant="h6">Your URLs:</Typography>
      {urls.map((url) => (
        <Paper key={url.id} sx={{ p: 2, my: 2 }}>
          <Typography>
            🔗 Short URL:{' '}
            <Link href={`/s/${url.id}`} target="_blank">
              {window.location.origin}/s/{url.id}
            </Link>
          </Typography>
          <Typography>📅 Expires: {new Date(url.expiry).toLocaleString()}</Typography>
          <Typography>🌐 Long URL: {url.longUrl}</Typography>
          <Typography color={now > url.expiry ? 'error.main' : 'success.main'}>
            {now > url.expiry ? 'Expired' : 'Active'}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default URLList;
