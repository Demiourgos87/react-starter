import { Link } from 'react-router';

import TestComponent from '@components/test-component/test-component';

const HomePage = () => {
  return (
    <section>
      <TestComponent />

      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </section>
  );
};

export default HomePage;
