import { Card, styled } from '@mui/material';

export const CardTitle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const CardBadge = styled('div')({
  padding: '2px 10px',
  border: '1px solid black',
});

export const CardGenre = styled('div')({
  color: '#909090',
  marginTop: 15,
});

export const CardBlock = styled(Card)({
  'width': '30%',
  'marginBottom': 30,
  'cursor': 'pointer',
  '&:hover': {
    opacity: 0.5,
  },
});
