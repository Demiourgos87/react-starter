import { Link, useParams } from 'react-router';

const UserPage = () => {
  const { id } = useParams();

  return (
    <section>
      <h1>User {id}</h1>

      <Link to="/users">Back to Users</Link>
    </section>
  );
};

export default UserPage;
