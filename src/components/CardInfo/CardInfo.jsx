import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { CardTitle, CardBadge, CardGenre, CardBlock } from './CardInfo.styles';
import noImage from 'assets/images/no-img.png';

const CardInfo = ({ cardInfo, setFilm }) => {
  const history = useHistory();

  const handleCardClick = useCallback(() => {
    setFilm(cardInfo);
    history.push(`/search-film/${cardInfo.id}`);
  }, [cardInfo.id]);

  return (
    <CardBlock onClick={handleCardClick}>
      <CardMedia
        component="img"
        height="250"
        image={cardInfo.poster_path || noImage}
        alt={cardInfo.title}
      />
      <CardContent>
        <CardTitle>
          <Typography>{cardInfo.title}</Typography>
          <CardBadge>{new Date(`${cardInfo.release_date}`).getFullYear()}</CardBadge>
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
