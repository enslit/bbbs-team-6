import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Header() {
  const { isAuthorized, currentUser } = useContext(CurrentUserContext);
  return (
    <header>
      <h1>Header</h1>
      <div>
        {isAuthorized
          ? `You are logged in as ${currentUser.username}`
          : 'You are not logged in'}
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/calendar">Calendar</NavLink>
          </li>
          <li>
            <NavLink to="/questions">Questions</NavLink>
          </li>
          <li>
            <NavLink to="/read-and-watch">Read and Watch</NavLink>
          </li>
          <li>
            <NavLink to="/where-to-go">Where to Go</NavLink>
          </li>
          <li>
            <NavLink to="/user-account">User Account</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
