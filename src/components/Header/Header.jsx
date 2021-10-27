import React from 'react';
import { Typography } from '@mui/material';
import { HeaderBlock } from './Header.styles';
import Button from 'components/common';

const Header = () => {
  return (
    <HeaderBlock
      position="static"
      style={{ background: 'transparent', boxShadow: 'none', flexDirection: 'row' }}
    >
      <Typography variant="h6" component="h1" color="secondary" sx={{ flexGrow: 1 }}>
        netflixtoulette
      </Typography>
      {/*<Button type="link" text="search" />*/}
    </HeaderBlock>
  );
};

export default Header;
