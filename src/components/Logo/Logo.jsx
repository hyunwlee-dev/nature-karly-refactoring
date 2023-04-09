import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

const Logo = function () {
  return (
    <Link to="/">
      <img alt="네이처칼리" src={logo} />
    </Link>
  );
};

export default Logo;
