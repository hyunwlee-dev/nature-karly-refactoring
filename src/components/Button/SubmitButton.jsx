import PropTypes from 'prop-types';

import classes from './Button.module.css';

function getIsSecondary(isSecondary) {
  if (isSecondary) return 'secondary';

  return 'primary';
}
export function SubmitButton({
  isSecondary,
  className,
  children,
  ...restProps
}) {
  const combineClassNames = `${classes.Button} ${
    classes[getIsSecondary(isSecondary)]
  } ${className}`.trim();

  return (
    <>
      <button className={combineClassNames} type="button" {...restProps}>
        {children}
      </button>
    </>
  );
}

SubmitButton.defaultProps = {
  isSecondary: false,
};

SubmitButton.propTypes = {
  isSecondary: PropTypes.bool,
};
