import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerBlock } from './Login.styles';
import LoginForm from 'components/LoginForm';
import Button from 'components/common/Button';

const Login = () => {
  const handleLogin = (value) => {
    console.log(value);
  };

  return (
    <ContainerBlock>
      <Button
        type={'link'}
        text={'sign up'}
        to="/register"
        component={Link}
        sx={{ border: '1px solid black', marginLeft: 'auto' }}
      />
      <LoginForm title={'login'} ButtonText={'LOGIN'} handlerSubmit={handleLogin} />
    </ContainerBlock>
  );
};

export default Login;
