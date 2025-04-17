import { Link } from 'react-router';

const UsersPage = () => {
  return (
    <section>
      <h1>Users list: </h1>

      <ul>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>
        <li>
          <Link to="/users/2">User 2</Link>
        </li>
        <li>
          <Link to="/users/3">User 3</Link>
        </li>
        <li>
          <Link to="/users/4">User 4</Link>
        </li>
        <li>
          <Link to="/users/5">User 5</Link>
        </li>
      </ul>

      <Link to="/">Back to Home</Link>
    </section>
  );
};

export default UsersPage;
