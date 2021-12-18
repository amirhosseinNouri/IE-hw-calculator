import React from 'react';
import s from './button.module.css';
import cx from 'classnames';
import PropTypes from 'prop-types';

export default function Button({ text, className, onClick }) {
  return (
    <button className={cx(className, s.button)} onClick={() => onClick(text)}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};
