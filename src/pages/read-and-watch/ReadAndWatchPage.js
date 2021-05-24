import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import GuidePage from './GuidePage';
import VideoPage from './VideoPage';
import ArticlesPage from './ArticlesPage';
import FilmsPage from './FilmsPage';
import BooksPage from './BooksPage';

function ReadAndWatchPage() {
  const { path, url, isExact } = useRouteMatch();
  return (
    <>
      <h1>Читать и смотреть</h1>
      {isExact && (
        <ul className="menu">
          <li className="menu__item">
            <Link to={`${url}/guide`}>Справочник</Link>
          </li>
          <li className="menu__item">
            <Link to={`${url}/video`}>Видео</Link>
          </li>
          <li className="menu__item">
            <Link to={`${url}/articles`}>Статьи</Link>
          </li>
          <li className="menu__item">
            <Link to={`${url}/films`}>Фильмы</Link>
          </li>
          <li className="menu__item">
            <Link to={`${url}/books`}>Книги</Link>
          </li>
        </ul>
      )}
      <Switch>
        <Route path={`${path}/guide`}>
          <GuidePage />
        </Route>
        <Route path={`${path}/video`}>
          <VideoPage />
        </Route>
        <Route path={`${path}/articles`}>
          <ArticlesPage />
        </Route>
        <Route path={`${path}/films`}>
          <FilmsPage />
        </Route>
        <Route path={`${path}/books`}>
          <BooksPage />
        </Route>
      </Switch>
    </>
  );
}

export default ReadAndWatchPage;
