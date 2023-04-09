import PropTypes from 'prop-types';

import { useRecoilValue } from 'recoil';

import classes from './Button.module.css';
import { idTotalValidation } from '@/@store/signUpState';

function getIsSecondary(isSecondary) {
  if (isSecondary) return 'secondary';

  return 'primary';
}

function useCheckIsClickable(isLoading = false) {
  const idValidState = useRecoilValue(idTotalValidation);
  if (isLoading || idValidState === 'good') {
    return true;
  }

  return false;
}

export function IdCheckButton({
  isSecondary,
  className,
  children,
  isLoading,
  ...restProps
}) {
  const combineClassNames = `${classes.Button} ${
    classes[getIsSecondary(isSecondary)]
  } ${className}`.trim();

  return (
    <button
      className={combineClassNames}
      disabled={useCheckIsClickable(isLoading)}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
}

IdCheckButton.defaultProps = {
  isSecondary: false,
};

IdCheckButton.propTypes = {
  isSecondary: PropTypes.bool,
};
