import React, { useEffect, useRef, useState } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/about/AboutPage';
import CalendarPage from '../pages/calendar/CalendarPage';
import QuestionsPage from '../pages/questions/QuestionsPage';
import ReadAndWatchPage from '../pages/read-and-watch/ReadAndWatchPage';
import WhereToGoPage from '../pages/where-to-go/WhereToGoPage';
import PrivateRoute from '../hocs/PrivateRoute';
import UserAccountPage from '../pages/user-account/UserAccountPage';
import ChildrenIsRightsPage from '../pages/children-is-rights/ChildrenIsRightsPage';
import HistoriesPage from '../pages/histories/HistoriesPage';
import { useAuth } from '../hooks/useAuth';
import VideoPopup from '../components/VideoPopup/VideoPopup';
import AuthPopup from './AuthPopup/AuthPopup';
import CalendarPopup from './CalendarPopup/CalendarPopup';
import Error from '../pages/Error/Error';

function App() {
  const history = useHistory();
  const location = useLocation();
  const { authReady } = useAuth();
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const offset = useRef(0);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [selectedPopupVideo, setSelectedPopupVideo] = useState(null);
  const [selectedPopupEvent, setSelectedPopupEvent] = useState(null);
  const [popupEventStatus, setPopupEventStatus] = useState(null);

  function handleAuthModalOpen() {
    setAuthModalOpen(true);
  }

  function handleMainVideoClick(video) {
    setSelectedPopupVideo(video);
    history.push('/read-and-watch/video');
  }

  function handleEventClick(event, status) {
    status && setPopupEventStatus(status);
    setSelectedPopupEvent(event);
  }

  function closeAllPopups() {
    setSelectedPopupVideo(null);
    setSelectedPopupEvent(null);
    setPopupEventStatus(null);
    setAuthModalOpen(false);
    if (
      (isAuthModalOpen && location.pathname === '/calendar') ||
      location.pathname === '/user-account'
    ) {
      history.push('/');
    }
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  /* Когда мы перезагружаем страницу на защищенном роуте, нас выбрасывает на страницу логина. Это происходит потому,
  что проверка JWT выполняется асинхронно и пока она не закончена, состояние loggedIn в значении false.
  Рендер страницы продолжается и защищенный роут нас отбрасывает согласно логике.
  Когда мы уже на странице логина, завершается проверка JWT и значение loggedIn меняется на true.
  Срабатывает хук useEffect на странице логина, чтобы не пускать авторизованного пользователя и снова происходит редирект.
  Чтобы не делать редиректы туда-сюда, так как это заметно, притормозим рендер приложения пока не прошла проверка авторизации */
  if (!authReady) {
    return <h1>Выполняется проверка авторизации</h1>;
  }

  return (
    <div className={`app ${isHeaderFixed ? 'app_header-offset' : ''}`}>
      <Header
        hidden={isHeaderHidden}
        fixed={isHeaderFixed}
        handleAuthModalOpen={handleAuthModalOpen}
      />
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <HomePage
              videoClick={handleMainVideoClick}
              eventClick={handleEventClick}
            />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          {/* Вернуть приватный роут по окончанию работы */}
          <PrivateRoute
            handleAuthModalOpen={handleAuthModalOpen}
            path="/calendar"
          >
            <CalendarPage eventClick={handleEventClick} />
          </PrivateRoute>
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
          <PrivateRoute
            handleAuthModalOpen={handleAuthModalOpen}
            path="/user-account"
          >
            <UserAccountPage />
          </PrivateRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </main>
      <Footer />

      {isAuthModalOpen && <AuthPopup onClose={closeAllPopups} />}
      {selectedPopupVideo && (
        <VideoPopup video={selectedPopupVideo} onClose={closeAllPopups} />
      )}
      {selectedPopupEvent && (
        <CalendarPopup
          event={selectedPopupEvent}
          popupStatus={popupEventStatus}
          onClose={closeAllPopups}
        />
      )}
    </div>
  );
}

export default App;
