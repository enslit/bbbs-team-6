import React from 'react';
import { useAuth } from '../../hooks/useAuth';

function UserAccountPage() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Личный кабинет</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default UserAccountPage;
