import React, { useContext, useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/about/AboutPage';
import CalendarPage from '../pages/calendar/CalendarPage';
import QuestionsPage from '../pages/questions/QuestionsPage';
import ReadAndWatchPage from '../pages/read-and-watch/ReadAndWatchPage';
import UserAccountPage from '../pages/user-account/UserAccountPage';
import WhereToGoPage from '../pages/where-to-go/WhereToGoPage';
import ProtectedRoute from '../hocs/ProtectedRoute';
import Login from '../pages/login/Login';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {
  const history = useHistory();
  const [appReady, setAppReady] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    useContext(CurrentUserContext)
  );

  const onSignIn = ({ username }) => {
    console.log('user login data:', username);
    localStorage.setItem('user', JSON.stringify({ username }));
    setCurrentUser({ username });
    setIsAuthorized(true);
    history.push('/user-account');
  };

  const onSignOut = () => {
    localStorage.removeItem('user');
    setCurrentUser({ username: '' });
    setIsAuthorized(false);
    history.push('/');
  };

  useEffect(() => {
    if (!appReady) {
      const userJson = localStorage.getItem('user');

      if (userJson) {
        const user = JSON.parse(userJson);
        setCurrentUser({ username: user.username });
        setIsAuthorized(true);
      }

      setAppReady(true);
    }

    return () => null;
  }, [appReady]);

  if (!appReady) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={{ isAuthorized, currentUser }}>
        <div className="page">
          <Header onSignOut={onSignOut} />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/calendar">
              <CalendarPage />
            </Route>
            <Route path="/questions">
              <QuestionsPage />
            </Route>
            <Route path="/read-and-watch">
              <ReadAndWatchPage />
            </Route>
            <Route path="/where-to-go">
              <WhereToGoPage />
            </Route>
            {/* <Route path="/sign-in"> */}
            {/*  <Login onLogin={onSignIn} /> */}
            {/* </Route> */}
            <ProtectedRoute
              path="/sign-in"
              authorized={!isAuthorized}
              component={Login}
              onLogin={onSignIn}
            />
            <ProtectedRoute
              path="/user-account"
              authorized={isAuthorized}
              component={UserAccountPage}
              user={currentUser}
            />
            <Route path="/">
              <h2>404</h2>
            </Route>
          </Switch>
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
