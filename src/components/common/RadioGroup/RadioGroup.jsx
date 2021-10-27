import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

import { RadioGroupBlock, RadioButtonSubtitle, useStyles } from './RadioGroup.styles';

const RadioGroup = () => {
  const classes = useStyles();

  console.log(classes);

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
          <ToggleButton
            key={option}
            value={option}
            className={classes.toggleButton}
            classes={{ root: classes.toggleButton }}
            style={{ borderRadius: 5 }}
            aria-label={option}
            selected={radioValue === option}
          >
            {option}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </RadioGroupBlock>
  );
};

export default RadioGroup;
