import { styled, Typography, Box } from '@mui/material';

export const SearchPanelTitle = styled(Typography)(({ theme }) => ({
  display: 'block',
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  fontWeight: 'bold',
  margin: '20px 0',
}));

export const SearchPanelButtonBlock = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 30,
});
