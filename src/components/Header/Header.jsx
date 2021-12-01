import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { HeaderBlock } from './Header.styles';
import Button from 'components/common/Button';
import { clearToken } from 'utils/localStorage';

const Header = ({ detailPage }) => {

  const logout = useCallback(() => clearToken(), []);

  return (
    <HeaderBlock
      position="static"
      style={{ background: 'transparent', boxShadow: 'none', flexDirection: 'row' }}
    >
      <Typography variant="h6" component="h1" color="secondary" sx={{ flexGrow: 1 }}>
        netflixtoulette
      </Typography>
      {detailPage && <Button type="link" text="search" to="/" component={Link} />}
      <Button
        sx={{ ml: 5 }}
        type="link"
        text="logout"
        to="/login"
        component={Link}
        onClick={logout}
      />
    </HeaderBlock>
  );
};

export default Header;
