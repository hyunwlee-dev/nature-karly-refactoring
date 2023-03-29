import { emailState, pwState, userInfo  } from '@/@store/signUpState';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import { useRecoilSignUp } from '@/firebase/auth/useSignUp';

import classes from './Button.module.css';
import { useState } from 'react';

function getIsSecondary(isSecondary) {
  if (isSecondary) return 'secondary';

  return 'primary';
}
export function SubmitButton({ isSecondary, className, children, ...restProps }) {
  const { signUp } = useRecoilSignUp();
  const email = useRecoilValue(emailState);
  const password = useRecoilValue(pwState);
  const combineClassNames = `${classes.Button} ${
    classes[getIsSecondary(isSecondary)]
  } ${className}`.trim();

  const handleSubmitButton = async() => {
    const response = await signUp(email, password);
  }
  
  return (
    <>
    <button onClick={handleSubmitButton} className={combineClassNames} type="button" {...restProps}>
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