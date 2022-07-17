import logo from './logo.svg';
import HeaderStyles from './Header.module.css';

function Header() {
  return (
    <header className={HeaderStyles.appHeader}>
      <img src={logo} alt="logo" className={HeaderStyles.appHeaderLogo} />
      <h1>Firebase Sampler</h1>
    </header>
  );
}

export default Header;
