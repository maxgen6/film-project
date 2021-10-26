import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLink, ButtonPrimary } from './styled';

const Button = React.forwardRef((props, ref) => {
  const { type = 'primary', text, ...rest } = props;
  const buttonContent = (type) => {
    switch (type) {
      case 'link':
        return (
          <ButtonLink type="link" ref={ref} {...rest}>
            {text}
          </ButtonLink>
        );
      case 'primary':
        return (
          <ButtonPrimary type="primary" ref={ref} {...rest}>
            {text}
          </ButtonPrimary>
        );
    }
  };

  return <>{buttonContent(type)}</>;
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
