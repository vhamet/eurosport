import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../img/logo.svg';

const Header = () => (
  <header
    className="h-16 px-16 flex justify-center md:justify-start border-b border-b-blue-800"
    data-testid="app-header"
  >
    <Link to="/" className="h-16 w-36 pr-4 flex items-center">
      <Logo data-testid="app-logo" />
    </Link>
  </header>
);

export default Header;
