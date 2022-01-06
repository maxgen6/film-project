import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

import SearchPanel from 'components/SearchPanel';
import MainLayout from 'components/MainLayout';
import RenderCards from 'components/RenderCards';

const SearchPage = ({ getAllMovies, cards }) => {
  const renderHeaderContent = () => <SearchPanel />;

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <MainLayout renderHeaderContent={renderHeaderContent} cardData={cards}>
      <Container maxWidth="xl">
        <RenderCards cardData={cards?.data || []} />
      </Container>
    </MainLayout>
  );
};

SearchPage.propTypes = {
  cards: PropTypes.array,
  getAllMovies: PropTypes.func,
};

export default SearchPage;
