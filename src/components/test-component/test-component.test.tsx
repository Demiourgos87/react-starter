import TestComponent from '@components/test-component/test-component';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Test component', () => {
  it('Render title', async () => {
    render(<TestComponent />);

    const title = await screen.findByTestId('component-title');

    expect(title).toHaveTextContent('Test Component');
  });

  it('Increment counter', async () => {
    render(<TestComponent />);

    const counter = await screen.findByTestId('component-counter');
    const button = await screen.findByTestId('component-increment-button');

    expect(counter).toHaveTextContent('Count: 0');

    fireEvent.click(button);
    expect(counter).toHaveTextContent('Count: 1');
  });
});
