import { styled, Box, ToggleButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const RadioGroupBlock = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const RadioButton = styled(ToggleButton)(({ theme, selected }) => {
  return (
    selected && {
      'backgroundColor': theme.palette.secondary.main,
      'color': theme.palette.primary.main,
      'marginRight': 15,
      'padding': '5px 30px',
      'fontWeight': 'bold',
      '&:hover': {
        backgroundColor: '#4b4b4b',
      },
    }
  );
});

export const RadioButtonSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  fontWeight: 'bold',
  marginRight: 15,
}));

export const useStyles = makeStyles((theme) => {
  return {
    toggleButton: {
      'marginRight': 15,
      'padding': '5px 30px',
      'fontWeight': 'bold',
      '&[aria-pressed=true]': {
        'backgroundColor': theme.palette.secondary.main,
        'color': theme.palette.primary.main,
        '&:hover': {
          backgroundColor: '#674248',
        },
      },
      '&[aria-pressed=false]': {
        'backgroundColor': 'rgb(127,126,126)',
        'color': theme.palette.primary.main,
        '&:hover': {
          backgroundColor: '#2a2626',
        },
      },
    },
  };
});
