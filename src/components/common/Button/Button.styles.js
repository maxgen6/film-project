import { styled, Button } from '@mui/material';

export const ButtonLink = styled(Button)(({ theme }) => ({
  'backgroundColor': theme.palette.primary.main,
  'color': theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: '#909090',
  },
}));

export const ButtonPrimary = styled(Button)(({ theme }) => ({
  'color': theme.palette.primary.main,
  'backgroundColor': theme.palette.secondary.main,
  'fontWeight': 'bold',
  'padding': '10px 45px',
  '&:hover': {
    backgroundColor: '#674248',
  },
}));
