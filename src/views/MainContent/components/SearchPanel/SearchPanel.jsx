import React from 'react';

import { SearchPanelTitle, SearchPanelButtonBlock } from './styled';
import { Atoms } from '../../../../components';

const SearchPanel = () => {
  const { SearchInput, RadioGroup, Button } = Atoms;

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
