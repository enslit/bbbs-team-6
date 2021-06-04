import { memo, useState, useEffect } from 'react';
import { func } from 'prop-types';
import { useAuth } from '../../hooks/useAuth';
import { bbbsApi } from '../../utils/api';
import Intro from '../../components/Intro/Intro';
import CalendarElement from '../../components/Calendar/CalendarElement/CalendarElement';
import History from '../../components/History/History';
import Place from '../../components/Place/Place';
import Article from '../../components/Article/Article';
import Movie from '../../components/Movie/Movie';
import Video from '../../components/Video/Video';
import FacebookWidget from '../../components/FacebookWidget/FacebookWidget';
import Question from '../../components/Question/Question';
import './home-page.css';
import Loader from '../../components/Loader/Loader';

HomePage.propTypes = {
  videoClick: func,
};

function HomePage({ videoClick }) {
  const [mainData, setMainData] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    bbbsApi
      .getMainPage()
      .then((res) => {
        setMainData(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsFetching(false));
  }, []);

  if (isFetching) {
    return (
      <div className="main__section content_loading">
        <Loader />
      </div>
    );
  }

  return (
    <section className="main__section">
      <section className="mainpage__intro">
        {user && mainData ? (
          <CalendarElement event={mainData.event} />
        ) : (
          <Intro />
        )}
        {mainData && <History history={mainData.history} />}
      </section>

      <section className="mainpage__blocks">
        {mainData && <Place place={mainData.place} />}
      </section>

      <section className="mainpage__block">
        {mainData && <Article article={mainData.articles[0]} />}
      </section>

      <section className="mainpage__block">
        <ul className="movies">
          {mainData?.movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </ul>
      </section>

      <section className="mainpage__blocks">
        {mainData && <Video video={mainData.video} onClick={videoClick} />}
      </section>

      <section className="mainpage__blocks-col">
        <FacebookWidget />
        <ul className="questions questions_place_maipage">
          {mainData?.questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </ul>
      </section>

      <section className="mainpage__block">
        {mainData && <Article article={mainData.articles[1]} />}
      </section>
    </section>
  );
}

export default memo(HomePage);
