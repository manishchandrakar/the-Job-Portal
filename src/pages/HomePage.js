import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from './Layought/Layought';

const HomePage = () => {
  return (
    <Layout>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
            Welcome to the Job Portal
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Box textAlign="center">
              <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Find your dream job today!
              </Typography>
              <Button variant="contained" sx={{ color: 'white' }} >
                <Link to="/jobs" style={{ color: 'white', textDecoration: 'none' }}>
                  Explore Job Listings
                </Link>
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box textAlign="center">
              <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Are you an employer?
              </Typography>
              <Button variant="contained" color="secondary">
                <Link to="/employer" style={{ color: 'white', textDecoration: 'none' }}>
                  Post a Job
                </Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default HomePage;
