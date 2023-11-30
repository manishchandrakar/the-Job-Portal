import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from './Layought/Layought';

const NotFoundPage = () => {
  return (
    <Layout>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
    >
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        size="large"
      >
        Go Back to Home
      </Button>
    </Box>
    </Layout>
  );
};

export default NotFoundPage;
