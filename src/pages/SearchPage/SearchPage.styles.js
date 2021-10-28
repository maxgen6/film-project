import { styled } from '@mui/material';
import bg from 'assets/images/bg.jpeg';

export const MainContentBg = styled('div')({
  'minHeight': 300,
  'backgroundImage': `url(${bg})`,
  'position': 'relative',
  '&:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    background: '#000',
    bottom: 0,
    opacity: 0.7,
    zIndex: 0,
  },
});

export const CardBlock = styled('div')({
  padding: '30px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
});
