import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { FilmInfoBlock, TypographyBlock, FilmInfoFlexBlock, Rating } from './FilmInfo.styles';

const FilmInfo = ({ film }) => {
  console.log(film);

  return (
    <FilmInfoBlock>
      <CardMedia
        component="img"
        sx={{
          height: 400,
          width: 350,
        }}
        image={film.poster_path}
        alt={film.title}
      />
      <TypographyBlock>
        <FilmInfoFlexBlock>
          <Typography variant="h4" component="p" color="secondary">
            {film.title}
          </Typography>
          <Rating>{film.vote_average}</Rating>
        </FilmInfoFlexBlock>

        <Typography variant="h6" component="p" color="primary">
          {film.tagline}
        </Typography>

        <FilmInfoFlexBlock>
          <Typography variant="h6" component="p" color="primary" sx={{ fontWeight: 'bold' }}>
            {moment(`${film.release_date}`).format('YYYY')}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="primary"
            sx={{ fontWeight: 'bold', marginLeft: 3 }}
          >
            {film.runtime} min
          </Typography>
        </FilmInfoFlexBlock>

        <Typography
          variant="p"
          component="p"
          color="primary"
          sx={{ marginTop: 5, maxWidth: '650px' }}
        >
          {film.overview}
        </Typography>
      </TypographyBlock>
    </FilmInfoBlock>
  );
};

FilmInfo.propTypes = {
  film: PropTypes.object,
};

export default FilmInfo;
