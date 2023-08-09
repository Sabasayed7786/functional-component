import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import styles from "./counter.module.css";

function CounterApp() {
  const [count, setCount] = useState(0);
  const [previousCount, setPreviousCount] = useState(0);

//   useEffect(() => {
//     setPreviousCount(count);
//   }, [count]);

  const handleIncrement = () => {
    setPreviousCount(count);
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setPreviousCount(count);
    setCount(count - 1);
  };

  const handleReset = () => {
    setPreviousCount(0);
    setCount(0);
  };

  return (
    <div className={styles.container}>
      <p>Previous Count: {previousCount}</p>
      <p>Current Count: {count}</p>
      <div className={styles.buttonContainer}>
        <Button variant="contained" color="primary" onClick={handleIncrement}>
          Increment Count
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDecrement}>
          Decrement Count
        </Button>
        <Button className={styles.button} variant="outlined" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default CounterApp;

