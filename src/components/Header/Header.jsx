import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import { HeaderBlock } from './Header.styles';
import Button from 'components/common/Button';

const Header = ({ detailPage }) => {
  const history = useHistory();

  return (
    <HeaderBlock
      position="static"
      style={{ background: 'transparent', boxShadow: 'none', flexDirection: 'row' }}
    >
      <Typography variant="h6" component="h1" color="secondary" sx={{ flexGrow: 1 }}>
        netflixtoulette
      </Typography>
      {detailPage && <Button type="link" text="search" onClick={() => history.push('/')} />}
    </HeaderBlock>
  );
};

export default Header;
