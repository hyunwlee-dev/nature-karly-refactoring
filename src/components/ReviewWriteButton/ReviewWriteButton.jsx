import { useRecoilState, useSetRecoilState } from 'recoil';

import { Button } from '..';

import { modalStates, showModalState } from '@/@store/modalStates';
import classes from './ReviewWriteButton.module.css';
export function ReviewWriteButton({ buttonName }) {
  const [modalState, setModalState] = useRecoilState(modalStates);
  const setShowModal = useSetRecoilState(showModalState);

  function putModalId(buttonName) {
    if (buttonName === '후기 작성하기') {
      setModalState({ ...modalState, reviewModal: true });
    } else {
      setModalState({ ...modalState, inquiryModal: true });
    }
  }

  return (
    <Button
      className={classes.writeButton}
      onClick={() => {
        putModalId(buttonName);
        setShowModal(true);
      }}
    >
      {buttonName}
    </Button>
  );
}
