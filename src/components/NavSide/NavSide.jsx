import classes from './NavSide.module.css';

export function NavSide() {
  return (
    <a className={classes.navSide} href="#">
      <span>샛별·낮</span>
      <span> 배송안내</span>
    </a>
  );
}
