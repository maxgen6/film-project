import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';

import SearchInfo from 'components/SearchInfo';
import MainLayout from 'components/MainLayout';
import RenderCards from 'components/RenderCards';
import FilmInfo from 'components/FilmInfo';

const DetailPage = ({ cardData }) => {
  const renderHeaderContent = () => <FilmInfo film={cardData[0]} />;

  return (
    <MainLayout renderHeaderContent={renderHeaderContent} detailPage={true} film={cardData[0]}>
      <SearchInfo cardData={cardData} detailPage={true} film={cardData[0]} />
      <Container maxWidth="xl">
        <RenderCards cardData={cardData} />
      </Container>
    </MainLayout>
  );
};

DetailPage.propTypes = {
  cardData: PropTypes.array,
};

export default DetailPage;
