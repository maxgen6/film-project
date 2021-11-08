import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLink, ButtonPrimary } from './Button.styles';

const TYPE_TO_COMPONENT = {
  link: ButtonLink,
  primary: ButtonPrimary,
};

const Button = React.forwardRef((props, ref) => {
  const { type = 'primary', text, ...rest } = props;

  const ButtonComponent = TYPE_TO_COMPONENT[type];

  return (
    <ButtonComponent type={type} ref={ref} {...rest}>
      {text}
    </ButtonComponent>
  );
});

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  type: PropTypes.oneOf(['link', 'primary']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  htmlType: PropTypes.oneOf(['button', 'reset', 'submit', 'menu']),
  onClick: PropTypes.func,
  rest: PropTypes.object,
};

export default Button;
