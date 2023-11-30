import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import "../../Style/footer.css";

const Footer = () => {
  return (
    <Box component="footer" className="footer-container">
      <Typography variant="body2" className="footer-text">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
      <Typography variant="body2" className="footer-text">
        Made with&nbsp;
        <span role="img" aria-label="love">
          ❤️
        </span>
        &nbsp;by&nbsp;
        <Link href="#" target="_blank" rel="noopener noreferrer" className="footer-link">
          Your Website
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
