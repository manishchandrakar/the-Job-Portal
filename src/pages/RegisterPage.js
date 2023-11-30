import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../Style/RegisterPage.css';
import Layout from './Layought/Layought';

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your registration logic here
  };

  return (
    <Layout>
      <Box className="register-page-container">
        <Typography variant="h4" className="register-page-title">
          Create an Account
        </Typography>
        <form onSubmit={handleSubmit} className="register-form">
          <TextField label="Name" variant="outlined" fullWidth className="register-input" />
          <TextField label="Email" variant="outlined" fullWidth className="register-input" />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            className="register-input"
          />
          <Button type="submit" variant="contained" color="primary" className="register-button">
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" className="signin-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </Typography>
      </Box>
    </Layout>
  );
};

export default RegisterPage;
