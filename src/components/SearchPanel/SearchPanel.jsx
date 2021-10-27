import React from 'react';

import { SearchPanelTitle, SearchPanelButtonBlock } from './styled';
import SearchInput from 'components/common/SearchInput';
import RadioGroup from 'components/common/RadioGroup';
import Button from 'components/common/Button';

const SearchPanel = () => {
  return (
    <>
      <SearchPanelTitle variant="h5" component="h2">
        find your movie
      </SearchPanelTitle>
      <SearchInput />
      <SearchPanelButtonBlock>
        <RadioGroup />
        <Button type="primary" text="search" />
      </SearchPanelButtonBlock>
    </>
  );
};

export default SearchPanel;
