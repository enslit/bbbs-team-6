import { memo, useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Movie from '../../components/Movie/Movie';

function HomePage() {
  const [mainData, setMainData] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    setMainData(data);
  }, []);

  return (
    <section className="mainpage">
      {user ? (
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
      ) : (
        <p>Я авторизовался!</p>
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
                      момент, как ребёнок научился говорить, и&nbsp;не&nbsp;одно
                      слово, а&nbsp;задавать бесконечное количество вопросов,
                      жизнь меняется. Вы&nbsp;будете не&nbsp;понимать друг
                      друга, потом понимать чуть лучше&nbsp;и, Аннотация статьи
                      в&nbsp;несколько абзацев. В&nbsp;тот момент, как ребёнок
                      научился говорить, и&nbsp;не&nbsp;одно слово,
                      а&nbsp;задавать бесконечное количество вопросов, жизнь
                      меняется. Вы&nbsp;будете не&nbsp;понимать друг друга,
                      потом понимать чуть лучше&nbsp;и,
                    </p>
                    <p className="event-article__paragraph event-article__paragraph_size_big">
                      Аннотация статьи в&nbsp;несколько абзацев. В&nbsp;тот
                      момент, как ребёнок научился говорить, и&nbsp;не&nbsp;одно
                      слово, а&nbsp;задавать бесконечное количество вопросов,
                      жизнь меняется. Вы&nbsp;будете не&nbsp;по&nbsp;Аннотация
                      статьи в&nbsp;несколько абзацев. В&nbsp;тот момент, как
                      ребёнок научился говорить, и&nbsp;не&nbsp;одно слово,
                      а&nbsp;задавать бесконечное количество вопросов, жизнь
                      меняется.
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
          {mainData.movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </ul>
      </section>

      <section className="mainpage__blocks">
        <div className="mainvideo">
          <div className="mainvideo__description">
            <a className="mainlink" href="#"></a>
            <div className="mainvideo__name">
              <h3 className="mainvideo__title">
                Эфир с выпускником нашей программы
              </h3>
              <p className="mainvideo__caption">
                Иван Рустаев, выпускник программы
              </p>
            </div>
            <a className="mainvideo__link" href="#">
              смотреть видео
            </a>
          </div>
          <img
            src="./images/mainvideo.png"
            alt=""
            className="mainvideo__video"
          />
        </div>
      </section>

      <section className="mainpage__blocks-col">
        <iframe
          className="facebook"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBigBrothers.BigSisters.Russia&amp;tabs=timeline&amp;width=420&amp;height=627&amp;small_header=false&amp;adapt_container_width=false&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <ul className="questions questions_place_maipage">
          <li className="question">
            <a className="mainlink" href="#"></a>
            <h3 className="question__title">
              Я&nbsp;боюсь, что ребёнок ко&nbsp;мне слишком сильно привяжется.
              Что делать?
            </h3>
            <div className="question__tags">
              <p className="tag tag_theme_white">рубрика</p>
            </div>
          </li>
          <li className="question">
            <a className="mainlink" href="#"></a>
            <h3 className="question__title">
              Возможно&nbsp;ли продлить срок участия в&nbsp;программе, если
              и&nbsp;я&nbsp;и&nbsp;мой «младший» хотим остаться
              в&nbsp;программе?
            </h3>
            <div className="question__tags">
              <p className="tag tag_theme_white">рубрика</p>
            </div>
          </li>
          <li className="question">
            <a className="mainlink" href="#"></a>
            <h3 className="question__title">
              Что делать если Ваш младший решил закрыть пару, т.к. слишком занят
              с&nbsp;учебой и&nbsp;друзьями?
            </h3>
            <div className="question__tags">
              <p className="tag tag_theme_white">рубрика</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="mainpage__block">
        <article className="preview-article preview-article_color_green">
          <a className="mainlink" href="#"></a>
          <h2 className="preview-article__title">
            У&nbsp;таких детей возникает ощущение отверженности. Оно приводит
            к&nbsp;напряженности и&nbsp;недоверию к&nbsp;людям&nbsp;и, как итог,
            к&nbsp;реальному неприятию себя и&nbsp;окружающих.
          </h2>
          <a className="preview-article__link" href="#">
            читать статью
          </a>
        </article>
      </section>
    </section>
  );
}

export default memo(HomePage);

const data = {
  event: {
    id: 11,
    tags: [
      {
        id: 111,
        name: 'Волонтёры',
        slug: 'volunteers',
      },
      {
        id: 112,
        name: 'Дети',
        slug: 'children',
      },
    ],
    title: 'Субботний meet up: учимся проходить интевью',
    startAt: '2021-05-08T19:22:00Z',
    endAt: '2021-05-08T21:22:00Z',
    address: 'Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)',
    contact: 'Александра, +7 926 356-78-90',
    remainSeats: 5,
    description:
      'Наконец-то наступила весна и мы пережили эту долгую зиму! И возможно, что внутренних сил и ресурса сейчас не так много, а до окончания учебного года ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба "Наставник PRO", которую мы хотим посвятить теме поиска моральных сил, смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными.',
    booked: true,
  },
  history: {
    id: 21,
    imageUrl: 'https://picsum.photos/870/520',
    title: 'История Марины и Алины',
  },
  place: {
    chosen: true,
    id: 31,
    title: 'Сплав на байдарках в две строки',
    name: 'усадьба Архангельское в две строки',
    info: 'Девока, 10 лет. Активный отдых',
    description:
      'Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и, Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и,\nАннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не по Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.',
    imageUrl: 'https://picsum.photos/1125/394',
    link: 'https://www.moscowzoo.ru/',
  },
  articles: [
    {
      id: 41,
      color: '#C8D1FF',
      title:
        'Развитие детей-сирот отличается от развития детей, живущих в семьях. Все  этапы развития у детей-сирот проходят с искажениями и имеют ряд негативных  особенностей. ',
    },
    {
      id: 42,
      color: '#8CDD94',
      title:
        'У таких детей возникает ощущение отверженности. Оно приводит к напряженности и  недоверию к людям и, как итог, к реальному неприятию себя и окружающих.',
    },
  ],
  movies: [
    {
      id: 51,
      imageUrl: 'https://picsum.photos/420/239',
      title: 'Жутко громко и запредельно близко',
      info: 'Василий Сигарев, Борисов-Мусотов (Россия), 2009 год',
      link: 'https://youtu.be/8VzzlhOyOSI',
      tags: [
        {
          id: 551,
          name: 'рубрика',
          slug: 'rubric',
        },
        {
          id: 552,
          name: 'рубрика',
          slug: 'rubric',
        },
      ],
    },
    {
      id: 52,
      imageUrl: 'https://picsum.photos/420/239',
      title: 'Жутко громко и запредельно близко',
      info: 'Василий Сигарев, Борисов-Мусотов (Россия), 2009 год',
      link: 'https://youtu.be/8VzzlhOyOSI',
      tags: [
        {
          id: 551,
          name: 'рубрика',
          slug: 'rubric',
        },
        {
          id: 552,
          name: 'рубрика',
          slug: 'rubric',
        },
      ],
    },
    {
      id: 53,
      imageUrl: 'https://picsum.photos/420/239',
      title: 'Жутко громко и запредельно близко',
      info: 'Василий Сигарев, Борисов-Мусотов (Россия), 2009 год',
      link: 'https://youtu.be/8VzzlhOyOSI',
      tags: [
        {
          id: 551,
          name: 'рубрика',
          slug: 'rubric',
        },
        {
          id: 552,
          name: 'рубрика',
          slug: 'rubric',
        },
      ],
    },
    {
      id: 54,
      imageUrl: 'https://picsum.photos/420/239',
      title: 'Жутко громко и запредельно близко',
      info: 'Василий Сигарев, Борисов-Мусотов (Россия), 2009 год',
      link: 'https://youtu.be/8VzzlhOyOSI',
      tags: [
        {
          id: 551,
          name: 'рубрика',
          slug: 'rubric',
        },
        {
          id: 552,
          name: 'рубрика',
          slug: 'rubric',
        },
      ],
    },
  ],
  video: {
    id: 61,
    title: 'Эфир с выпускником нашей программы',
    info: 'Иван Рустаев, выпускник программы',
    link: 'https://youtu.be/H980rXfjdq4',
    imageUrl: 'https://picsum.photos/1199/675',
    duration: 134,
  },
  questions: [
    {
      id: 71,
      tags: [
        {
          id: 771,
          name: 'рубрика',
          slug: 'rubric',
        },
      ],
      title:
        'Я боюсь, что ребёнок ко мне слишком сильно привяжется. Что делать?',
    },
    {
      id: 72,
      tags: [
        {
          id: 771,
          name: 'рубрика',
          slug: 'rubric',
        },
      ],
      title:
        'Возможно ли продлить срок участия в программе, если и я и мой «младший» хотим остаться в программе?',
    },
    {
      id: 73,
      tags: [
        {
          id: 771,
          name: 'рубрика',
          slug: 'rubric',
        },
      ],
      title:
        'Что делать если Ваш младший решил закрыть пару, т.к. слишком занят с учебой и друзьями?',
    },
  ],
};
