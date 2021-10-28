import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { CardTitle, CardBadge, CardGenre, CardBlock } from './CardInfo.styles';

const CardInfo = ({ cardInfo }) => {
  const history = useHistory();

  return (
    <CardBlock onClick={() => history.push(`/search-film/${cardInfo.id}`)}>
      <CardMedia component="img" height="250" image={cardInfo.poster_path} alt={cardInfo.title} />
      <CardContent>
        <CardTitle>
          <Typography>{cardInfo.title}</Typography>
          <CardBadge>{moment(`${cardInfo.release_date}`).format('YYYY')}</CardBadge>
        </CardTitle>
        <CardGenre>{cardInfo.genres.join(', ')}</CardGenre>
      </CardContent>
    </CardBlock>
  );
};

CardInfo.propTypes = {
  cardInfo: PropTypes.object,
};

export default CardInfo;
