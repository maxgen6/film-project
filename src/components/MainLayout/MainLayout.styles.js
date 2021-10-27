import { styled } from '@mui/material';
import bg from 'assets/images/bg.jpeg';
import { makeStyles } from '@mui/styles';

export const MainLayoutHeaderWrapper = styled('div')({
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

export const MainLayoutContent = styled('div')({
  flexGrow: 1,
});

export const useStyles = makeStyles(() => {
  return {
    container: {
      zIndex: 10,
      position: 'relative',
    },
  };
});
