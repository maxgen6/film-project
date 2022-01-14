import React from 'react';

import CardInfo from 'components/CardInfo';
import { CardBlock } from './RenderCards.styles';

const RenderCards = ({ cardData = [] }) => {
  if (cardData?.length === 0) {
    return <div>No films</div>;
  }

  if (cardData?.length > 0) {
    return (
      <CardBlock>
        {cardData.map((card) => (
          <CardInfo cardInfo={card} key={card.id} />
        ))}
      </CardBlock>
    );
  }
};

export default RenderCards;
