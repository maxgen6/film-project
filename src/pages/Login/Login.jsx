import React, { useState } from 'react';

import { LoginForm, ContainerBlock, FormTitle, FormInput } from './Login.styles';
import Button from 'components/common/Button';

const Login = () => {
  const [emailData, setEmailData] = useState(null);
  const [passwordData, setPasswordData] = useState(null);

  return (
    <ContainerBlock>
      <LoginForm component="form">
        <FormTitle variant="h5" component="p" color="secondary">
          login form
        </FormTitle>
        <FormInput
          placeholder="Email"
          type="email"
          error={!emailData}
          helperText={!emailData && 'input your email'}
          onChange={(e) => setEmailData(e.target.value)}
        />
        <FormInput
          placeholder="Password"
          type="password"
          error={!passwordData}
          helperText={!passwordData && 'input your password'}
          onChange={(e) => setPasswordData(e.target.value)}
        />
        <Button text="LOGIN" type="primary" />
      </LoginForm>
    </ContainerBlock>
  );
};

export default Login;
