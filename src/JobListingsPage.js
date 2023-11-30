import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const JobListingsPage = () => {
  // Sample data for job listings
  const jobListings = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'ABC Company',
      location: 'New York',
      description: 'We are seeking a skilled software engineer...',
    },
    // Add more job listings here...
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        Job Listings
      </Typography>
      <Grid container spacing={3}>
        {jobListings.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                  {job.title}
                </Typography>
                <Typography variant="subtitle1" component="h3" sx={{ mb: 1 }}>
                  {job.company}
                </Typography>
                <Typography variant="subtitle2" component="p" sx={{ mb: 2 }}>
                  {job.location}
                </Typography>
                <Typography variant="body2" component="p" sx={{ mb: 2 }}>
                  {job.description}
                </Typography>
                <Button
                  variant="contained"
                  component={Link}
                  to={`/jobs/${job.id}`}
                  color="primary"
                  sx={{ textTransform: 'none' }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default JobListingsPage;
