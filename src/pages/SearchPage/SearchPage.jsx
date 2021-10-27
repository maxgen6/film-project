import React from 'react';
import SearchPanel from 'components/SearchPanel';
import MainLayout from 'components/MainLayout';

const SearchPage = () => {
  const renderHeaderContent = () => <SearchPanel />;

  return (
    <MainLayout renderHeaderContent={renderHeaderContent}>
      <div>321412</div>
    </MainLayout>
  );
};

export default SearchPage;
