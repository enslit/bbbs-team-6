import Button from '../../components/Button/Button';
import { NavLink } from 'react-router-dom';
import './error.css';
export default function Error() {
  return (
    <div className="error">
      <div className="error__image-container"></div>
      <h2 className="error__title">404</h2>
      <p className="error__subtitle">
        К сожалению, запрашиваемая страница не найдена. Попробуйте перейти на
        главную страницу
      </p>
      <NavLink className="error__link" to="/">
        <Button>Вернуться на главную</Button>
      </NavLink>
    </div>
  );
}
