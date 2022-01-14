import { styled, Box, ToggleButton, Typography } from '@mui/material';

export const RadioGroupBlock = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const RadioButton = styled(ToggleButton)(({ theme }) => {
  return {
    'marginRight': 15,
    'padding': '5px 30px',
    'fontWeight': 'bold',
    'backgroundColor': 'rgb(127,126,126)',
    'color': theme.palette.primary.main,
    '&:hover': {
      backgroundColor: '#2a2626',
    },
    '&.Mui-selected': {
      'backgroundColor': theme.palette.secondary.main,
      'color': theme.palette.primary.main,
      '&:hover': {
        backgroundColor: '#674248',
      },
    },
  };
});

export const RadioButtonSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  fontWeight: 'bold',
  marginRight: 15,
}));
