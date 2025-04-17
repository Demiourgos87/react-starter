import { Route, Routes } from 'react-router';

import AboutPage from '@routes/about/about';
import HomePage from '@routes/home/home';
import UserPage from '@routes/users/user';
import UsersPage from '@routes/users/users';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="users">
        <Route index element={<UsersPage />} />
        <Route path=":id" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
