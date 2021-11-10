import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerBlock } from './Authorization.styles';
import Button from 'components/common/Button';
import LoginForm from 'components/LoginForm';

const Authorization = () => {
  const handleRegister = (value) => {
    console.log(value);
  };

  return (
    <ContainerBlock>
      <Button
        type={'link'}
        text={'login'}
        to="/login"
        component={Link}
        sx={{ border: '1px solid black', marginLeft: 'auto' }}
      />
      <LoginForm title={'sign up'} ButtonText={'SIGN UP'} handlerSubmit={handleRegister} />
    </ContainerBlock>
  );
};

export default Authorization;
