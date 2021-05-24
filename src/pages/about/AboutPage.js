import React from 'react';
import logo from '../../assets/icons/big-logo.svg';
import './about.css';

function AboutPage() {
  return (
    <>
      <section className="about">
        <div className="about__wrapper">
          <h1 className="about__title">
            Наставники.про — цифровая информационная платформа огрганизации
            «Старшие Братья Старшие Сестры». Созданная для поддержки наставников
            программы.
          </h1>
          <img className="about__logo" src={logo} alt="logo" />
          <div className="about__info">
            <div className="about__ellipse">
              <p className="about__ellipse-text">Об организации</p>
            </div>
            <article className="about__article">
              <p className="about__paragraph">
                «Старшие Братья Старшие Сестры» — межрегиональная общественная
                организация содействия воспитанию подрастающего поколения. Мы
                поддерживаем детей, которым требуется внимание: оставшихся без
                попечения родителей, приемных, детей из неполных, многодетных
                или неблагополучных семей, детей с ограниченными возможностями.
              </p>
              <p className="about__paragraph">
                Любому человеку, тем более ребенку, необходимо общение. Без него
                дети растут неуверенными и замкнутыми. Одиночество токсично, а
                самое надежное противоядие – дружба.
              </p>
              <p className="about__paragraph">
                Мы помогаем детям, которым не хватает поддержки взрослого друга,
                «Младшим». Таким другом становится наш волонтер, «Старший». Он
                принимает ребенка, какой он есть, поддерживает, помогает
                раскрыть потенциал, почувствовать уверенность в своих силах,
                узнать элементарные вещи о жизни, адаптироваться и полноценно
                участвовать в жизни общества.
              </p>
            </article>
          </div>
        </div>
        <blockquote className="quote">
          <p className="quote__paragraph">
            Мы хотим, чтобы наставник был у каждого ребенка, который в нем
            нуждается
          </p>
        </blockquote>
        <div className="about__tabs">
          <div className="about__tab">
            <div className="rectangle rectangle_light-blue">Пожертвования</div>
            <div className="rectangle__information">
              <p className="about__paragraph about__paragraph_height_rectangle-light-blue">
                Деньги пойдут на оплату работы кураторов программы
                (профессиональные психологи/социальные работники), которые
                поддерживают дружбу между ребенком и наставником.
              </p>
              <a className="rectangle__link">сделать пожертвование</a>
            </div>
          </div>

          <div className="about__tab">
            <div className="rectangle rectangle_red">Наставничество</div>
            <div className="rectangle__information">
              <p className="about__paragraph about__paragraph_height_rectangle-red">
                Наставник «Старшие Братья Старшие Сестры» — значимый взрослый,
                который становится для ребенка старшим другом, ролевой моделью,
                принимает своего «Младшего» таким, какой он есть. «Старший»
                открывает для ребенка дверь в большой мир и дарит ему надежду на
                более счастливое и успешное будущее.
              </p>
              <a className="rectangle__link">Подробнее</a>
            </div>
          </div>

          <div className="about__tab">
            <div className="rectangle rectangle_green">Партнерство</div>
            <div className="rectangle__information">
              <p className="about__paragraph about__paragraph_height_rectangle-green">
                Компании поддерживают нас не только деньгами, но и делами. Мы
                собрали все возможные способы поддержки и сотрудничества:
                профессиональная помощь Pro Bono, организационная помощь,
                корпоративное волонтерство, мастер-классы, лекции, учебные
                программы
              </p>
              <a className="rectangle__link">подробнее</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
