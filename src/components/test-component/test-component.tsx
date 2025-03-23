import { useState } from 'react';

const TestComponent = () => {
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => {
    const newCount = counter + 1;
    setCounter(newCount);
  };

  return (
    <section className="test-component">
      <h1 data-testid="component-title">Test Component</h1>
      <p data-testid="component-counter">Count: {counter}</p>

      <button onClick={handleOnClick} data-testid="component-increment-button">
        Increment
      </button>
    </section>
  );
};

export default TestComponent;
