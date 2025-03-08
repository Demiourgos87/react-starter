import { useState } from 'react';

const TestComponent = () => {
  const [text, setText] = useState('This is a component for testing purposes.');

  const handleOnClick = () => {
    console.log('clicked');
    setText('Some changed text');
  };

  return (
    <section className="test-component">
      <h1>Test Component</h1>
      <p>{text}</p>

      <button onClick={handleOnClick}>Change text</button>
    </section>
  );
};

export default TestComponent;
