import classes from './MainPopUp.module.css';

import { Button, A11yHidden } from '@/components';

import mainPopUp from '@/assets/mainPopUp.svg';

export function MainPopUp() {
  return (
    <article className={classes.article}>
      <A11yHidden>메인 팝업</A11yHidden>
      <div className={classes.mainPopUpInner}>
        <a href="#">
          <img src={mainPopUp} alt="메인팝업" width="440px" height="586px" />
        </a>
        <div className={classes.buttonWrapper}>
          <Button className={classes.closeToday}>오늘 하루 안보기</Button>
          <Button className={classes.close}>닫기</Button>
        </div>
      </div>
    </article>
  );
}
