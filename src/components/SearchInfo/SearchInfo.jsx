import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { InfoBlock, Wrapper, SortBlock, RadioButton } from './SearchInfo.styles';

const toggleContent = Object.freeze({
  release: 'release date',
  rating: 'rating',
});

const SearchInfo = ({ cardData, detailPage, film }) => {
  const [radioValue, setRadioValue] = useState(null);

  const handleChangeRadio = useCallback((_, value) => setRadioValue(value), []);

  const renderSearchInfo = () => {
    if (!cardData || cardData?.length === 0) {
      return detailPage ? (
        <InfoBlock>
          <Typography variant="h6" component="p">
            Film by {film?.genres.join(', ')} genres
          </Typography>
        </InfoBlock>
      ) : (
        ''
      );
    }

    if (cardData?.length > 0) {
      return (
        <InfoBlock>
          <Typography variant="h6" component="p">
            {cardData?.length} movies found
          </Typography>
          <SortBlock>
            <Typography variant="h6" component="p">
              Sort by
            </Typography>
            <ToggleButtonGroup value={radioValue} exclusive onChange={handleChangeRadio}>
              {Object.values(toggleContent).map((option) => (
                <RadioButton value={option} key={option}>
                  {option}
                </RadioButton>
              ))}
            </ToggleButtonGroup>
          </SortBlock>
        </InfoBlock>
      );
    }
  };

  return (
    <Wrapper>
      <Container>{renderSearchInfo()}</Container>
    </Wrapper>
  );
};

SearchInfo.propTypes = {
  cardData: PropTypes.array,
  detailPage: PropTypes.bool,
  film: PropTypes.object,
};

export default SearchInfo;
