import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ContainerBlock } from './Authorization.styles';
import Button from 'components/common/Button';
import Alerts from 'components/common/Alerts';
import LoginForm from 'components/LoginForm';
import firebase from 'utils/firebase';
import { setToken } from 'utils/localStorage';

const Authorization = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(false);

  const handleRegister = (value) => {
    const { email, password } = value;
    try {
      if (email && password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((response) => {
            setToken(response?.user?.refreshToken);
            history.push('/');
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const closeAlert = () => setErrorMessage(false);

  return (
    <ContainerBlock>
      <Button
        type={'link'}
        text={'login'}
        to="/login"
        component={Link}
        sx={{ border: '1px solid black', marginLeft: 'auto' }}
      />
      {!!errorMessage ? (
        <Alerts
          message={errorMessage}
          open={!!errorMessage}
          severity="error"
          closeAlert={closeAlert}
        />
      ) : null}
      <LoginForm title={'sign up'} ButtonText={'SIGN UP'} handlerSubmit={handleRegister} />
    </ContainerBlock>
  );
};

export default Authorization;
