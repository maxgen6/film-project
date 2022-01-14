import React, { useState } from 'react';
import { FormInput, FormTitle, LoginFormBox } from './LoginForm.styles';
import Button from '../common/Button';

const LoginForm = ({ title, ButtonText, handlerSubmit }) => {
  const [emailData, setEmailData] = useState(null);
  const [passwordData, setPasswordData] = useState(null);

  // Comment: now it's current name for func ?
  const submitForm = (e) => {
    e.preventDefault();
    const obj = {
      email: emailData,
      password: passwordData,
    };
    handlerSubmit(obj);
  };

  return (
    <>
      <LoginFormBox component="form">
        <FormTitle variant="h5" component="p" color="secondary">
          {title}
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
          helperText={!passwordData && passwordData?.length < 5 && 'input your password'}
          onChange={(e) => setPasswordData(e.target.value)}
        />
        <Button text={ButtonText} type="primary" onClick={submitForm} />
      </LoginFormBox>
    </>
  );
};

export default LoginForm;
