import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import "../Style/JobListingsPage.css";
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
        <Typography variant="h4" gutterBottom>
          Job Listings
        </Typography>
        <Grid container spacing={2}>
          {jobListings.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {job.title}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {job.company}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {job.location}
                  </Typography>
                  <Typography variant="body2">{job.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default JobListingsPage;
  