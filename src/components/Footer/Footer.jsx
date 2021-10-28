import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { FooterBlock } from './Footer.styles';

const Footer = () => {
  return (
    <FooterBlock>
      <Container maxWidth="1250">
        <Typography variant="h6" component="p" color="secondary">
          netflixroulette
        </Typography>
      </Container>
    </FooterBlock>
  );
};

export default Footer;
