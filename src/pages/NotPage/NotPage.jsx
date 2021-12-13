import React from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SearchPanel from 'components/SearchPanel';
import MainLayout from 'components/MainLayout';
import Button from 'components/common/Button';

const NotPage = ({ t }) => {
  const history = useHistory();

  const renderHeaderContent = () => <SearchPanel />;

  return (
    <MainLayout renderHeaderContent={renderHeaderContent}>
      <Container>
        <Typography variant="h2">{t('title')}</Typography>
        <Button text={t('button_text')} type="primary" onClick={() => history.push('/')} />
      </Container>
    </MainLayout>
  );
};

export default withTranslation('not_page')(NotPage);
