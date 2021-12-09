import React from 'react';
import { withTranslation } from 'react-i18next';

import { SearchPanelTitle, SearchPanelButtonBlock } from './styled';
import SearchInput from 'components/common/SearchInput';
import RadioGroup from 'components/common/RadioGroup';
import Button from 'components/common/Button';

const SearchPanel = ({ t }) => {
  return (
    <>
      <SearchPanelTitle variant="h5" component="h2">
        {t('search_title')}
      </SearchPanelTitle>
      <SearchInput />
      <SearchPanelButtonBlock>
        <RadioGroup />
        <Button type="primary" text={t('search_button')} />
      </SearchPanelButtonBlock>
    </>
  );
};

export default withTranslation('header')(SearchPanel);
