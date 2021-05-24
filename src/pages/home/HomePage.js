import { memo, useState, useEffect } from 'react';
import { func } from 'prop-types';
import { useAuth } from '../../hooks/useAuth';
import Place from '../../components/Place/Place';
import Article from '../../components/Article/Article';
import Movie from '../../components/Movie/Movie';
import Video from '../../components/Video/Video';
import Question from '../../components/Question/Question';
import { bbbsApi } from '../../utils/api';
import './home-page.css';

HomePage.propTypes = {
  videoClick: func,
};

function HomePage({ videoClick }) {
  const [mainData, setMainData] = useState();
  const { user } = useAuth();

  useEffect(() => {
    bbbsApi
      .getMainPage()
      .then((res) => {
        setMainData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content root__section">
      <section className="mainpage">
        {user ? (
          <p>Я авторизовался!</p>
        ) : (
          <section className="mainpage__intro">
            <div className="bbbs">
              <div className="bbbs__logo">
                <a
                  className="logo logo_place_mainpage"
                  href="https://www.nastavniki.org/o-nas/ob-organizaczii/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logo__img"
                    src="./images/logoSBSS-blue.svg"
                    alt="Логотип Старшие Братья Старшие Сестры"
                  />
                </a>
              </div>
              <div className="bbbs__about">
                <p className="bbbs__text">
                  Наставники.про&nbsp;— цифровая информационная платформа
                  огрганизации «Старшие Братья Старшие Сестры». Созданная для
                  поддержки наставников программы.
                </p>
              </div>
            </div>
            <div className="story">
              <a className="mainlink" href="#"></a>
              <h3 className="story__title">История Марины и Алины</h3>
            </div>
          </section>
        )}

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
          <iframe
            className="facebook"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBigBrothers.BigSisters.Russia&amp;tabs=timeline&amp;width=420&amp;height=627&amp;small_header=false&amp;adapt_container_width=false&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
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
    </main>
  );
}

export default memo(HomePage);
