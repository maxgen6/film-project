import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const LoginFormBox = styled(Box)({
  margin: '200px auto 0',
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
