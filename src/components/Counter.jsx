import { useState } from 'react';
import styles from './Counter.module.scss';

console.log(import.meta.env);

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => setCounter(prevCount => prevCount + 1);

  return (
    <form className={styles.counter}>
      <input value={counter} readOnly />
      <button type="button" onClick={handleIncrease}>
        Increase
      </button>
    </form>
  );
};

export default Counter;
