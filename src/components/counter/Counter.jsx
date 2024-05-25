import { useDispatch, useSelector } from 'react-redux';
import useCounter from '../../hooks/use-counter';
import { counterSlice } from '../../store/reducers/counterReducer';
import classes from './Counter.module.scss';

console.log(import.meta.env);

const Counter = () => {
  const counterHook = useCounter(0);
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(counterSlice.actions.increaseCounter());
  };

  return (
    <form className={classes.counter}>
      <input value={counterHook.count} readOnly />
      <button type="button" onClick={counterHook.increase}>
        Increase (using custom hook)
      </button>
      <input value={count} readOnly />
      <button type="button" onClick={handleIncrease}>
        Increase (using redux toolkit)
      </button>
    </form>
  );
};

export default Counter;
