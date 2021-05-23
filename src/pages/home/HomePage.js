import { memo, useState, useEffect } from 'react';
import { func } from 'prop-types';
import { useAuth } from '../../hooks/useAuth';
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
          <section className="event-soon-card">
            <div className="event-soon">
              <div className="event-soon__content-wrapper">
                <section className="profile-grid">
                  <div className="profile-grid__column profile-grid__column_size_wide event-soon__description event-soon__description_size_big">
                    <p className="tag tag_place_event">Выбор наставника</p>
                    <div className="event-soon__caption">
                      <div className="event-soon__title">
                        Сплав на байдарках в две строки
                      </div>
                      <div className="event-soon__subtitle">
                        усадьба Архангельское в две строки
                      </div>
                    </div>
                    <img
                      src="./images/event-soon.jpg"
                      className="event-soon__img"
                      alt="Локация"
                    />
                    <a href="#" target="_blank" className="event-soon__link">
                      перейти на сайт
                    </a>
                  </div>

                  <div className="profile-grid__column profile-grid__column_size_thin event-soon__about-wrapper event-soon__about-wrapper_size_big">
                    <article className="event-article event-article_size_big">
                      <div className="event-article__title event-article__title_size_big">
                        Девочка, 10 лет. Активный отдых
                      </div>
                      <p className="event-article__paragraph event-article__paragraph_size_big">
                        Аннотация статьи в&nbsp;несколько абзацев. В&nbsp;тот
                        момент, как ребёнок научился говорить,
                        и&nbsp;не&nbsp;одно слово, а&nbsp;задавать бесконечное
                        количество вопросов, жизнь меняется. Вы&nbsp;будете
                        не&nbsp;понимать друг друга, потом понимать чуть
                        лучше&nbsp;и, Аннотация статьи в&nbsp;несколько абзацев.
                        В&nbsp;тот момент, как ребёнок научился говорить,
                        и&nbsp;не&nbsp;одно слово, а&nbsp;задавать бесконечное
                        количество вопросов, жизнь меняется. Вы&nbsp;будете
                        не&nbsp;понимать друг друга, потом понимать чуть
                        лучше&nbsp;и,
                      </p>
                      <p className="event-article__paragraph event-article__paragraph_size_big">
                        Аннотация статьи в&nbsp;несколько абзацев. В&nbsp;тот
                        момент, как ребёнок научился говорить,
                        и&nbsp;не&nbsp;одно слово, а&nbsp;задавать бесконечное
                        количество вопросов, жизнь меняется. Вы&nbsp;будете
                        не&nbsp;по&nbsp;Аннотация статьи в&nbsp;несколько
                        абзацев. В&nbsp;тот момент, как ребёнок научился
                        говорить, и&nbsp;не&nbsp;одно слово, а&nbsp;задавать
                        бесконечное количество вопросов, жизнь меняется.
                      </p>
                    </article>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </section>

        <section className="mainpage__block">
          <article className="preview-article">
            <a className="mainlink" href="#"></a>
            <h2 className="preview-article__title">
              Развитие детей-сирот отличается от&nbsp;развития детей, живущих
              в&nbsp;семьях. Все этапы развития у&nbsp;детей-сирот проходят
              с&nbsp;искажениями и&nbsp;имеют ряд негативных особенностей.
            </h2>
            <a className="preview-article__link" href="#">
              читать статью
            </a>
          </article>
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
          <article className="preview-article preview-article_color_green">
            <a className="mainlink" href="#"></a>
            <h2 className="preview-article__title">
              У&nbsp;таких детей возникает ощущение отверженности. Оно приводит
              к&nbsp;напряженности и&nbsp;недоверию к&nbsp;людям&nbsp;и, как
              итог, к&nbsp;реальному неприятию себя и&nbsp;окружающих.
            </h2>
            <a className="preview-article__link" href="#">
              читать статью
            </a>
          </article>
        </section>
      </section>
    </main>
  );
}

export default memo(HomePage);
