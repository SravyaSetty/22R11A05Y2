import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { log } from '../utils/logger';

const RedirectPage = ({ urls }) => {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const entry = urls.find((u) => u.id === code);

    if (!entry) {
      alert('Invalid URL');
      log('ROUTER', 'ERROR', 'RedirectPage', `Invalid short code: ${code}`);
      navigate('/');
      return;
    }

    if (Date.now() > entry.expiry) {
      alert('This URL has expired');
      log('ROUTER', 'WARN', 'RedirectPage', `Expired short code: ${code}`);
      navigate('/');
      return;
    }

    log('ROUTER', 'INFO', 'RedirectPage', `Redirecting to ${entry.longUrl}`);
    window.location.href = entry.longUrl;
  }, [code, urls, navigate]);

  return null;
};

export default RedirectPage;
