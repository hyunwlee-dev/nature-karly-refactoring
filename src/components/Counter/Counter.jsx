import classes from './Counter.module.css';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';
import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/General/Input';

const Counter = function ({ ...restProps }) {
  const { count, onDecrease, onIncrease } = restProps;

  return (
    <div className={classes.Counter}>
      <Button
        className={
          count == 1 ? classes.DisabledMinusButton : classes.MinusButton
        }
        onClick={onDecrease}
        disabled={count == 1 ? true : false}
      >
        <A11yHidden>수량감소</A11yHidden>
      </Button>
      <Input className={classes.CountInput} type={'number'} value={count} />
      <Button className={classes.PlusButton} onClick={onIncrease}>
        <A11yHidden>수량증가</A11yHidden>
      </Button>
    </div>
  );
};

export default Counter;
