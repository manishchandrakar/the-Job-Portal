import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../Style/JobDetailsPage.css';

const JobDetailsPage = () => {
  return (
    <Box className="job-details-container">
      <Typography variant="h4" component="h1" className="job-details-title">
        Job Title
      </Typography>
      <Box className="job-details-content">
        <Typography variant="subtitle1" component="h2" className="job-details-subtitle">
          Company Name
        </Typography>
        <Typography variant="subtitle2" className="job-details-info">
          Location
        </Typography>
        <Typography variant="body1" className="job-details-description">
          Job Description
        </Typography>
      </Box>
      <Button variant="contained" component={Link} to="/jobs" color="primary" className="job-details-button">
        Back to Job Listings
      </Button>
    </Box>
  );
};

export default JobDetailsPage;
