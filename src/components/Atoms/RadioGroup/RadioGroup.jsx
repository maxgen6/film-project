import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

import { RadioGroupBlock, RadioButton, RadioButtonSubtitle, useStyles } from './styled';

const RadioGroup = () => {
  const classes = useStyles();
  const [radioValue, setRadioValue] = useState('title');

  const handleChangeRadio = (_, value) => setRadioValue(value);

  return (
    <RadioGroupBlock>
      <RadioButtonSubtitle component="p">search by</RadioButtonSubtitle>
      <ToggleButtonGroup value={radioValue} exclusive onChange={handleChangeRadio}>
        <ToggleButton
          value="title"
          className={classes.toggleButton}
          style={{ borderRadius: 5 }}
          aria-label="title"
          selected={radioValue === 'title'}
        >
          title
        </ToggleButton>
        <ToggleButton
          value="genre"
          className={classes.toggleButton}
          style={{ borderRadius: 5 }}
          aria-label="genre"
          selected={radioValue === 'genre'}
        >
          genre
        </ToggleButton>
      </ToggleButtonGroup>
    </RadioGroupBlock>
  );
};

export default RadioGroup;
