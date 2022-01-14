import { styled, TextField } from '@mui/material';

export const SearchInputBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  backgroundColor: '#000',
  color: theme.palette.primary.main,
  borderBottom: `2px solid ${theme.palette.secondary.main}`,
}));

export const SearchInputs = styled(TextField)(({ theme }) => ({
  'width': '100%',
  '& input': {
    color: theme.palette.primary.main,
    border: 'none',
  },
  '& fieldset': {
    border: 'none',
  },
}));
