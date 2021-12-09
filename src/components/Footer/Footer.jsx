import React from 'react';
import { withTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { FooterBlock } from './Footer.styles';

const Footer = ({ t }) => {
  return (
    <FooterBlock>
      <Container maxWidth="xl">
        <Typography variant="h6" component="p" color="secondary">
          {t('logo')}
        </Typography>
      </Container>
    </FooterBlock>
  );
};

export default withTranslation('footer')(Footer);
