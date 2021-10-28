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
import SearchInfo from 'components/SearchInfo';
import Footer from 'components/Footer';

const MainLayout = ({ renderHeaderContent, children, cardData, detailPage, film }) => {
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
        <SearchInfo cardData={cardData} detailPage={detailPage} film={film} />
      </div>

      <MainLayoutContent>{children}</MainLayoutContent>

      <Footer />
    </Wrapper>
  );
};

MainLayout.propTypes = {
  renderHeaderContent: PropTypes.func,
  cardData: PropTypes.array,
  detailPage: PropTypes.bool,
};

export default MainLayout;
