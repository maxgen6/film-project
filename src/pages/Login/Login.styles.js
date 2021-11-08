import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const ContainerBlock = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

export const LoginForm = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 20px',
  width: '50%',
  textAlign: 'center',
  borderRadius: '5px',
  border: '1px solid black',
});

export const FormTitle = styled(Typography)({
  textTransform: 'uppercase',
  marginBottom: 10,
});

export const FormInput = styled(TextField)({
  marginBottom: 15,
});
