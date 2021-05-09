import React, { useContext, useState } from 'react';
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
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    useContext(CurrentUserContext)
  );

  const onSignIn = (form) => {
    console.log('user login data:', form);
    setCurrentUser({ username: form.username });
    setIsAuthorized(true);
    history.push('/user-account');
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={{ isAuthorized, currentUser }}>
        <div className="page">
          <Header />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/calendar" exact>
              <CalendarPage />
            </Route>
            <Route path="/questions" exact>
              <QuestionsPage />
            </Route>
            <Route path="/read-and-watch" exact>
              <ReadAndWatchPage />
            </Route>
            <ProtectedRoute
              path="/user-account"
              exact
              authorized={isAuthorized}
              component={UserAccountPage}
              user={currentUser}
            />
            <Route path="/where-to-go" exact>
              <WhereToGoPage />
            </Route>
            <Route path="/sign-in" exact>
              <Login onLogin={onSignIn} />
            </Route>
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
