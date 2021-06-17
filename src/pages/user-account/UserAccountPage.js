import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import './user-account.css';
import { useHistory } from 'react-router-dom';
import AddHistoryForm from '../../components/AddHistoryForm/AddHistoryForm';
import AddedHistory from '../../components/AddedHistory/AddedHistory';

function UserAccountPage() {
  const { signOut } = useAuth();
  const history = useHistory();
  const [stories, setStories] = useState([]);

  const handleClickLogout = () => {
    signOut(() => history.push('/'));
  };

  const handleClickChangeCity = () => {
    console.log('нужно показать модалку выбора города');
  };

  const onAddNewHistory = (form) => {
    setStories([...stories, form]);
    console.log(stories);
  };
  useEffect(() => {
    console.log(stories);
  }, [stories]);
  const FullFilledStory = () => {
    return stories.map((event) => (
      <AddedHistory key={event.id} event={event} />
    ));
  };
  return (
    <main className="main">
      <section className="personal-account content main__section">
        <div className="personal-account__buttons">
          <button
            type="button"
            className="personal-account__text"
            onClick={handleClickChangeCity}
          >
            Изменить ваш город
          </button>
          <button
            type="button"
            className="personal-account__text"
            onClick={handleClickLogout}
          >
            Выйти
          </button>
        </div>
        <div className="personal-account__events">
          <h2 className="personal-account__title">
            У вас нет записи на мероприятия
          </h2>
        </div>
        <h2 className="personal-account__title personal-account__title_type_content">
          Составьте историю вашей дружбы с младшим. Эта страница доступна только
          вам.
        </h2>
        {stories.length >= 1 ? (
          <FullFilledStory />
        ) : (
          <AddHistoryForm onSubmit={onAddNewHistory} />
        )}
        )
      </section>
    </main>
  );
}

export default UserAccountPage;
