import { styled, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const RadioGroupBlock = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const RadioButtonSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  fontWeight: 'bold',
  marginRight: 15,
}));

export const useStyles = makeStyles((theme) => ({
  toggleButton: {
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
  },
}));
