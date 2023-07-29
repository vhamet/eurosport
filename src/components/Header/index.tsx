import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../logo.svg';

const Header = () => (
  <header className="py-5 px-16 border-b border-b-blue-800">
    <Link to="/" className="inline-block w-36 pr-4">
      <Logo />
    </Link>
  </header>
);

export default Header;
