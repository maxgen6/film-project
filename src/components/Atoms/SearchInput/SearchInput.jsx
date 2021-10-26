import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

import { SearchInputBlock, SearchInputs } from './styled';

const SearchInput = () => {
  return (
    <SearchInputBlock>
      <SearchInputs placeholder="Search film..." />
      <SearchIcon style={{ color: '#878686', marginRight: 10, cursor: 'pointer' }} />
    </SearchInputBlock>
  );
};

export default SearchInput;
