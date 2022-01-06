import React from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import {
  MainLayoutContent,
  useStyles,
  MainLayoutHeaderWrapper,
  Wrapper,
} from './MainLayout.styles';
import Header from 'components/Header';
import Footer from 'components/Footer';

const MainLayout = ({ renderHeaderContent, children, detailPage }) => {
  const classes = useStyles();

  return (
    <Wrapper>
      <div>
        <MainLayoutHeaderWrapper>
          <Container className={classes.container}>
            <Header detailPage={detailPage} />
            {renderHeaderContent()}
          </Container>
        </MainLayoutHeaderWrapper>
      </div>

      <MainLayoutContent>{children}</MainLayoutContent>

      <Footer />
    </Wrapper>
  );
};

MainLayout.propTypes = {
  renderHeaderContent: PropTypes.func,
  detailPage: PropTypes.bool,
};

export default MainLayout;
