import { Link } from 'react-router-dom';

import PropTypes, { arrayOf, oneOf, string, shape } from 'prop-types';

import { Menu } from '../Menu/Menu';

import classes from './Nav.module.css';

import { A11yHidden } from '@/components';

const NavigationItemType = shape({
  id: string,
  to: string,
  text: string,
});

const menuList = [
  { id: 'type=Gift', text: '선물하기' },
  { id: 'type=_Vegetable', text: '채소' },
  { id: 'type=Fruit', text: '과일·견과·쌀' },
  { id: 'type=SeaFood', text: '수산·해산·건어물' },
  { id: 'type=Meet', text: '정육·계란' },
  { id: 'type=Food', text: '국·반찬·메인요리' },
  { id: 'type=_Salad', text: '샐러드·간편식' },
  { id: 'type=Oil', text: '면·양념·오일' },
  { id: 'type=Coffee', text: '생수·음료·우유·커피' },
  { id: 'type=Snack', text: '간식·과자·떡' },
  { id: 'type=Bread', text: '베이커리·치즈·델리' },
  { id: 'type=Health', text: '건강식품' },
  { id: 'type=Wine', text: '와인' },
  { id: 'type=_TraditionalLiquor', text: '전통주' },
  { id: 'type=_Detergent', text: '생활용품·리빙·캠핑' },
  { id: 'type=_Cosmetics', text: '스킨케어·메이크업' },
  { id: 'type=shampoo', text: '헤어·바디·구강' },
  { id: 'type=Cook', text: '주방용품' },
  { id: 'type=HomeAppliances', text: '가전제품' },
  { id: 'type=Dog', text: '반려동물' },
  { id: 'type=Baby', text: '베이비·키즈·완구' },
  { id: 'type=Travel', text: '여행·티켓' },
];

export function Navigation({ as, headline, list, ...restProps }) {
  return (
    <>
      <A11yHidden as={as}>{headline}</A11yHidden>
      <nav className={classes.nav} {...restProps}>
        <Menu menuList={menuList} />
        <ul className={classes.navMenu}>
          {list.map((item) => (
            <li key={item.id}>
              <a href={item.to}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

Navigation.defaultProps = {
  as: 'h2',
};

Navigation.propTypes = {
  as: oneOf(['h2', 'h3', 'h4', 'h5', 'h6']),
  headline: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(NavigationItemType).isRequired,
};
