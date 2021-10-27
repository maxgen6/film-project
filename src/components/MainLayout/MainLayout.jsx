import React from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import { MainLayoutContent, useStyles, MainLayoutHeaderWrapper } from './MainLayout.styles';
import Header from 'components/Header';

const MainLayout = ({ renderHeaderContent, children }) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <MainLayoutHeaderWrapper>
          <Container className={classes.container}>
            <Header />
            {renderHeaderContent()}
          </Container>
        </MainLayoutHeaderWrapper>
      </div>

      <MainLayoutContent>{children}</MainLayoutContent>
    </>
  );
};

MainLayout.propTypes = {
  renderHeaderContent: PropTypes.func,
};

export default MainLayout;
