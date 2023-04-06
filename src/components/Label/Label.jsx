import PropTypes from 'prop-types';

import classes from './Label.module.css';
import { A11yHidden } from '@/components';

function classEssential(isEssential) {
  if (isEssential.includes('left')) return classes['essential-left'];
  if (isEssential.includes('right')) return classes['essential-right'];

  return '';
}

const getFontSize = (variable) => {
  if (variable === 'md') return '1rem';
  if (variable === 'sm') return '0.75rem';
  if (variable === 'lg') return '1.33125rem';
  if (variable === 'xl') return '1.775rem';
  if (variable === 'xxl') return '2.36875rem';

  return '3.15625rem';
};
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
      <label
        className={combineClassNames}
        htmlFor={htmlFor}
        // style={{ fontSize: `${getFontSize(fontSize)}` }}
        {...restProps}
      >
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
  fontSize: 'md',
  isEssential: 'none',
  invisibleLabel: false,
  labelStyle: 'Medium',
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  fontSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
  isEssential: PropTypes.oneOf(['none', 'left', 'right']),
  invisibleLabel: PropTypes.bool,
  labelStyle: PropTypes.oneOf(['Small', 'Medium', 'Large', 'XL', 'XXL']),
};
