import React, { useEffect, useRef, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/about/AboutPage';
import CalendarPage from '../pages/calendar/CalendarPage';
import QuestionsPage from '../pages/questions/QuestionsPage';
import ReadAndWatchPage from '../pages/read-and-watch/ReadAndWatchPage';
import WhereToGoPage from '../pages/where-to-go/WhereToGoPage';
import Login from '../pages/login/Login';
import PrivateRoute from '../hocs/PrivateRoute';
import UserAccountPage from '../pages/user-account/UserAccountPage';
import ChildrenIsRightsPage from '../pages/children-is-rights/ChildrenIsRightsPage';
import HistoriesPage from '../pages/histories/HistoriesPage';
import { ProvideAuth } from '../hooks/useAuth';
import VideoPopup from '../components/VideoPopup/VideoPopup';

function App() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const offset = useRef(0);

  const [selectedPopupVideo, setSelectedPopupVideo] = useState(false);

  function handleMainVideoClick(video) {
    setSelectedPopupVideo(video);
  }

  function closeAllPopups() {
    setSelectedPopupVideo(false);
  }

  const hideHeaderOnScroll = () => {
    const { top } = document.documentElement.getBoundingClientRect();

    if (top < -99 && top < offset.current) {
      setIsHeaderHidden(true);
    } else {
      setIsHeaderHidden(false);
    }

    if (top < -199) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }

    offset.current = top;
  };

  useEffect(() => {
    window.addEventListener('scroll', hideHeaderOnScroll);
    return () => {
      window.removeEventListener('scroll', hideHeaderOnScroll);
    };
  }, []);

  return (
    <div className={`app ${isHeaderFixed ? 'app_header-offset' : ''}`}>
      <ProvideAuth>
        <Header hidden={isHeaderHidden} fixed={isHeaderFixed} />
        <Switch>
          <Route path="/" exact>
            <HomePage videoClick={handleMainVideoClick} />
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
          <Route path="/children-is-rights">
            <ChildrenIsRightsPage />
          </Route>
          <Route path="/histories">
            <HistoriesPage />
          </Route>
          <Route path="/sign-in">
            <Login />
          </Route>
          <PrivateRoute path="/user-account">
            <UserAccountPage />
          </PrivateRoute>
          <Route path="/">
            <h2>404</h2>
          </Route>
        </Switch>
        <Footer />
      </ProvideAuth>
      <VideoPopup video={selectedPopupVideo} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
