import React from 'react';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

import SearchPanel from 'components/SearchPanel';
import MainLayout from 'components/MainLayout';
import RenderCards from 'components/RenderCards';

const SearchPage = ({ cardData }) => {
  const renderHeaderContent = () => <SearchPanel />;

  return (
    <MainLayout renderHeaderContent={renderHeaderContent} cardData={cardData}>
      <Container maxWidth="1250">
        <RenderCards cardData={cardData} />
      </Container>
    </MainLayout>
  );
};

SearchPage.propTypes = {
  cardData: PropTypes.array,
};

export default SearchPage;
