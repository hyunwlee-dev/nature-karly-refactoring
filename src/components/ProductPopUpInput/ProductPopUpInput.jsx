import {} from 'prop-types';
import { useEffect, useRef } from 'react';

import { useSetRecoilState, useRecoilValue } from 'recoil';

import classes from './ProductPopUpInput.module.css';
import { showModalState } from '@/@store/modalStates';
import { titleText } from '@/@store/popUpTextState';

export function ProductPopUpInput({ inputName }) {
  const setTitle = useSetRecoilState(titleText);
  const titleInput = useRef();
  const modal = useRecoilValue(showModalState);
  function getTitleText(e) {
    setTitle(e.target.value);
  }

  useEffect(() => {
    if (modal) {
      titleInput.current.focus();
    }
  }, [modal]);

  return (
    <input
      ref={titleInput}
      className={classes.formInput}
      id={inputName}
      maxLength="35"
      name={inputName}
      placeholder="제목을 입력해주세요"
      type="text"
      onChange={getTitleText}
      autoComplete="off"
    />
  );
}
