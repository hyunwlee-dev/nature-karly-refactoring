import { Fragment } from 'react';

import { useRecoilValue } from 'recoil';

import { idTotalValidation } from '@/@store/signUpState';
import classes from '@/components/InputValidation/Id/IdValidation.module.css';

export function IdValidation({ className }) {
  const idTotalValid = useRecoilValue(idTotalValidation);
  const checkIsValidateId = () => {
    return classes[idTotalValid];
  };
  const combineClassName = `${
    classes.idValidation
  } ${checkIsValidateId()} ${className}`.trim();

  return (
    <Fragment>
      {idTotalValid === 'perfect' && (
        <div className={combineClassName}>멋진 아이디네요!</div>
      )}
      {idTotalValid === 'nice' && (
        <div className={combineClassName}>중복확인을 해주세요.</div>
      )}
      {idTotalValid === 'good' && (
        <div className={combineClassName}>5 ~ 20자 영문, 숫자 조합</div>
      )}
    </Fragment>
  );
}
