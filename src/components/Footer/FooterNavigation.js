import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FooterMenuItem from './FooterMenuItem';
import FooterMenuItemExternal from './FooterMenuItemExternal';

FooterNavigation.propTypes = {
  list: PropTypes.array,
  modMenu: PropTypes.string,
  modList: PropTypes.string,
  isExternal: PropTypes.bool,
};

function FooterNavigation({ list, modList, modMenu, isExternal }) {
  const classesMenu = classnames('footer__menu', {
    [`footer__menu_${modMenu}`]: modMenu,
  });

  const classesList = classnames('footer__list', {
    [`footer__list_${modList}`]: modList,
  });

  return (
    <nav className={classesMenu}>
      <ul className={classesList}>
        {list.map(({ path, label }, index) => {
          return isExternal ? (
            <FooterMenuItemExternal key={index} to={path} label={label} />
          ) : (
            <FooterMenuItem key={index} to={path} label={label} />
          );
        })}
      </ul>
    </nav>
  );
}

export default FooterNavigation;
