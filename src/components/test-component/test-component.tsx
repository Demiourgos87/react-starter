import { useState } from 'react';

import styles from './test-component.module.scss';

const TestComponent = () => {
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => {
    const newCount = counter + 1;
    setCounter(newCount);
  };

  return (
    <section className={styles['test-component']}>
      <h1 data-testid="component-title">Test Component</h1>
      <p data-testid="component-counter">Count: {counter}</p>

      <button onClick={handleOnClick} data-testid="component-increment-button">
        Increment
      </button>

      <figure className={styles.figure}>
        <figcaption>Powered by </figcaption>
        <img src="src/assets/react.svg" alt="react-logo" />
      </figure>
    </section>
  );
};

export default TestComponent;
