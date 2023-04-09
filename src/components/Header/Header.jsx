import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';

import classes from './Header.module.css';

import cart from '@/assets/icons/Icon/header/Cart.svg';
import heart from '@/assets/icons/Icon/header/heart.svg';
import down from '@/assets/icons/Icon/header/Icon_down1.svg';
import location from '@/assets/icons/Icon/header/location.svg';
import search from '@/assets/icons/Icon/header/Search.svg';
import {
  IconComponent,
  Container,
  Navigation,
  Input,
  Label,
  A11yHidden,
  NavSide,
} from '@/components';

export default function Header({ navList: initialNavList }) {
  const [navList] = useState(initialNavList);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.scrollY >= 166);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isSticky) {
    return (
      <header className={classes.originHeader}>
        <Container className={classes.headerContainer}>
          <div className={classes.headerTop}>
            <ul className={classes.topMenu}>
              <li>
                <Link to="/signup">회원가입</Link>
                {/* <a href="#">회원가입</a> */}
                <span aria-hidden="true">|</span>
              </li>
              <li>
                <a href="#">로그인</a>
                <span aria-hidden="true">|</span>
              </li>
              <li>
                <a href="#">
                  고객센터
                  <img alt="아래화살표" src={down} />
                </a>
              </li>
            </ul>
            <div className={classes.headerSearch}>
              <div className={classes.headerSwitch}>
                <Logo />
                <a className={classes.activeSwitch} href="#">
                  마켓칼리
                </a>
                <span aria-hidden="true">|</span>
                <a href="#">뷰티칼리</a>
                <span className={classes.newIcon}>N</span>
              </div>
              <form action="" className={classes.headerSearchForm}>
                <fieldset>
                  <A11yHidden>검색 폼</A11yHidden>
                  <Label htmlFor="검색" invisibleLabel={true}>
                    검색
                  </Label>
                  <Input
                    placeholder="검색어를 입력해주세요"
                    style={{ width: '400px', height: '60px' }}
                    type="search"
                  />
                </fieldset>
                <IconComponent>
                  <img alt="검색아이콘" src={search} />
                </IconComponent>
              </form>
              <ul className={classes.headerIconList}>
                <li>
                  <IconComponent>
                    <a href="#">
                      <img alt="배송지" src={location} />
                    </a>
                  </IconComponent>
                </li>
                <li>
                  <IconComponent>
                    <a href="#">
                      <img alt="관심상품" src={heart} />
                    </a>
                  </IconComponent>
                </li>
                <li>
                  <IconComponent>
                    <Link to="/cartpage">
                      <img alt="장바구니" src={cart} />
                    </Link>
                  </IconComponent>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.navWrapper}>
            <Navigation headline="메인메뉴" list={navList} />
            <NavSide />
          </div>
        </Container>
      </header>
    );
  }

  return (
    <header className={classes.smallHeader}>
      <Container className={classes.headerContainer}>
        <div className={classes.smallHeaderTop}>
          <Navigation
            headline="메인메뉴"
            list={navList}
            style={{ width: '1800px' }}
          />
          <form
            action=""
            className={`${classes.headerSearchForm} ${classes.smallForm}`}
          >
            <fieldset>
              <A11yHidden>검색 폼</A11yHidden>
              <Label htmlFor="검색" invisibleLabel={true} />
              <Input
                placeholder="검색어를 입력해주세요"
                type="search"
                style={{
                  width: '194px',
                  height: '36px',
                  backgroundColor: 'var(--color-gray-50)',
                  border: '1px solid var(--color-primary)',
                }}
              />
            </fieldset>
            <IconComponent>
              <img alt="검색아이콘" src={search} />
            </IconComponent>
          </form>
          <ul
            className={`${classes.headerIconList} ${classes.smallHeaderIconList}`}
          >
            <li>
              <IconComponent>
                <a href="#">
                  <img alt="배송지" src={location} />
                </a>
              </IconComponent>
            </li>
            <li>
              <IconComponent>
                <a href="#">
                  <img alt="관심상품" src={heart} />
                </a>
              </IconComponent>
            </li>
            <li>
              <IconComponent>
                <a href="#">
                  <img alt="장바구니" src={cart} />
                </a>
              </IconComponent>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}

Header.propTypes = {
  // navList: PropTypes.arrayOf(NavLinkType),
};
