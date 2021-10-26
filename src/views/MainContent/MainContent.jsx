import React from 'react';
import { Toolbar, Container } from '@mui/material';
import { MainContentBg } from './styled';
import { Organism } from '../../components';
import SearchPanel from './components/SearchPanel';

const MainContent = () => {
  const { Header } = Organism;

  return (
    <MainContentBg>
      <Container maxWidth="lg" style={{ position: 'relative', zIndex: 10 }}>
        <Header />
        <SearchPanel />
      </Container>
    </MainContentBg>
  );
};

export default MainContent;
