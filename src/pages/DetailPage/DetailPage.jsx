import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';

import SearchInfo from 'components/SearchInfo';
import MainLayout from 'components/MainLayout';
import RenderCards from 'components/RenderCards';
import FilmInfo from 'components/FilmInfo';

const DetailPage = ({ currentFilm, cards }) => {
  const renderHeaderContent = () => <FilmInfo film={currentFilm} />;

  return (
    <MainLayout renderHeaderContent={renderHeaderContent} detailPage={true} film={currentFilm}>
      <SearchInfo detailPage={true} film={currentFilm} />
      <Container maxWidth="xl">
        <RenderCards cardData={cards} />
      </Container>
    </MainLayout>
  );
};

DetailPage.propTypes = {
  cards: PropTypes.array,
  currentFilm: PropTypes.object,
};

export default DetailPage;
