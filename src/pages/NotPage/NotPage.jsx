import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SearchPanel from 'components/SearchPanel';
import MainLayout from 'components/MainLayout';
import Button from 'components/common/Button';

const NotPage = () => {
  const history = useHistory();

  const renderHeaderContent = () => <SearchPanel />;

  return (
    <MainLayout renderHeaderContent={renderHeaderContent}>
      <Container>
        <Typography variant="h2">Page not founded!</Typography>
        <Button text="Back home!" type="primary" onClick={() => history.push('/')} />
      </Container>
    </MainLayout>
  );
};

export default NotPage;
