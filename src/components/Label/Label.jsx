import PropTypes from 'prop-types';

import classes from './Label.module.css';
import { A11yHidden } from '@/components';

function classEssential(isEssential) {
  if (isEssential.includes('left')) return classes['essential-left'];
  if (isEssential.includes('right')) return classes['essential-right'];

  return '';
}

/* ----------------------------------------------------------------------- */

export function Label({
  className,
  htmlFor,
  isEssential,
  invisibleLabel,
  labelStyle,
  children,
  ...restProps
}) {
  const combineClassNames = `${classes.label} ${className} ${
    classes[labelStyle]
  } ${classEssential(isEssential)}`.trim();
  if (!invisibleLabel) {
    return (
      <label className={combineClassNames} htmlFor={htmlFor} {...restProps}>
        {children}
      </label>
    );
  }

  return (
    <A11yHidden as="label" className={classes.label} htmlFor={htmlFor}>
      {htmlFor}
    </A11yHidden>
  );
}

/* Props -------------------------------------------------------------------- */

Label.defaultProps = {
  htmlFor: '',
  isEssential: 'none',
  invisibleLabel: false,
  labelStyle: 'Medium',
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  isEssential: PropTypes.oneOf(['none', 'left', 'right']),
  invisibleLabel: PropTypes.bool,
  labelStyle: PropTypes.oneOf(['Small', 'Medium', 'Large', 'XL', 'XXL']),
};
