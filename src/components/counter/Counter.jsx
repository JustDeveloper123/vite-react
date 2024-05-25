import useCounter from '../../hooks/use-counter';
import classes from './Counter.module.scss';

console.log(import.meta.env);

const Counter = () => {
  const counter = useCounter(0);

  return (
    <form className={classes.counter}>
      <input value={counter.count} readOnly />
      <button type="button" onClick={counter.increase}>
        Increase
      </button>
    </form>
  );
};

export default Counter;
