import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ContainerBlock } from './LoginPage.styles';
import LoginForm from 'components/LoginForm';
import Button from 'components/common/Button';
import Alerts from 'components/common/Alerts';
import { setToken } from 'utils/localStorage';
import { login } from 'api/auth';

const LoginPage = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(false);

  const handleLogin = (value) => {
    try {
      login(value)
        .then((response) => {
          if (response.operationType === 'signIn') {
            // Comment: response?.user?.getIdToken() should be used
            setToken(response?.user?.refreshToken);
            history.push('/');
          }
        })
        .catch((error) => setErrorMessage(error.message));
    } catch (e) {
      console.error(e);
    }
  };

  const closeAlert = () => setErrorMessage(false);

  return (
    <ContainerBlock>
      {!!errorMessage ? (
        <Alerts
          message={errorMessage}
          open={!!errorMessage}
          severity="error"
          closeAlert={closeAlert}
        />
      ) : null}
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

export default LoginPage;
