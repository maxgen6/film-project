import { styled } from '@mui/material';
import { ToggleButton } from '@mui/material';

export const InfoBlock = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  backgroundColor: '#e3e3e3',
  minHeight: '50px',
});

export const SortBlock = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const RadioButton = styled(ToggleButton)(({ theme }) => ({
  'color': '#000',
  'border': 'none',
  'marginLeft': 15,
  'textTransform': 'lowercase',
  '&.Mui-selected': {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
}));
