import React, { useState } from 'react';
import { ToggleButtonGroup } from '@mui/material';

import { RadioGroupBlock, RadioButtonSubtitle, RadioButton } from './RadioGroup.styles';

const RadioGroup = () => {
  const toggleOptions = Object.freeze({
    title: 'title',
    genre: 'genre',
  });

  const [radioValue, setRadioValue] = useState(toggleOptions.title);

  const handleChangeRadio = (_, value) => setRadioValue(value);

  return (
    <RadioGroupBlock>
      <RadioButtonSubtitle component="p">search by</RadioButtonSubtitle>
      <ToggleButtonGroup value={radioValue} exclusive onChange={handleChangeRadio}>
        {Object.values(toggleOptions).map((option) => (
          <RadioButton
            key={option}
            value={option}
            style={{ borderRadius: 5 }}
            aria-label={option}
            selected={radioValue === option}
          >
            {option}
          </RadioButton>
        ))}
      </ToggleButtonGroup>
    </RadioGroupBlock>
  );
};

export default RadioGroup;
