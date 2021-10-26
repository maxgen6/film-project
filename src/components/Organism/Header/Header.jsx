import React from 'react';
import { Typography, Container } from '@mui/material';
import { HeaderBlock } from './styled';
import useTheme from '@mui/material/styles/useTheme';
import { Atoms } from '../../../components';

const Header = () => {
  const { Button } = Atoms;
  const theme = useTheme();

  return (
    <HeaderBlock
      position="static"
      style={{ background: 'transparent', boxShadow: 'none', flexDirection: 'row' }}
    >
      <Typography
        variant="h6"
        component="h1"
        color={theme.palette.secondary.main}
        sx={{ flexGrow: 1 }}
      >
        netflixtoulette
      </Typography>
      {/*<Button type="link" text="search" />*/}
    </HeaderBlock>
  );
};

export default Header;
