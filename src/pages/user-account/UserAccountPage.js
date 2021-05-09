import React from 'react';
import { shape, string } from 'prop-types';

UserAccountPage.propTypes = {
  user: shape({
    username: string,
  }),
};

function UserAccountPage({ user }) {
  return (
    <div>
      <h1>User Account Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default UserAccountPage;
