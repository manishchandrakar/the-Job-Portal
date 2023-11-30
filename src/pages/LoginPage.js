import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../Style/LoginPage.css';
import Layout from './Layought/Layought';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
  };

  return (
    <Layout>
      <Box className="login-page-container">
        <Typography variant="h4" className="login-page-title">
          Login
        </Typography>
        <form onSubmit={handleSubmit} className="login-form">
          <TextField label="Email" variant="outlined" fullWidth className="login-input" />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            className="login-input"
          />
          <Button type="submit" variant="contained" color="primary" className="login-button">
            Sign In
          </Button>
        </form>
        <Typography variant="body2" className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </Typography>
      </Box>
    </Layout>
  );
};

export default LoginPage;
