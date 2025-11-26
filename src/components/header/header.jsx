import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Logo from '../../images/logo.png';
import Uzbekistan from '../../images/uzbekistan.png';
import Kazakhstan from '../../images/kazakhstan.png';
import China from '../../images/china.png';
import Usa from '../../images/united-states.png';
import Russia from '../../images/russia.png';
import './header.scss';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lng) => {
    if (i18n && typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(lng);
    } else {
      console.error("i18n.changeLanguage не доступен!");
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Greenleaf Logo" />
      </div>

      {/* Hamburger */}
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>

      <nav>
        <ul>
          <li><Link to="/">{t("header.home")}</Link></li>
          <li><Link to="/about">{t("header.about")}</Link></li>
          <li><Link to="/news">{t("header.news")}</Link></li>
          <li><Link to="/products">{t("header.products")}</Link></li>
          <li><Link to="/contact">{t("header.contact")}</Link></li>
        </ul>
        <div className="header-btn">
          <img onClick={() => changeLang("uz")} src={Uzbekistan} alt="Uzbekistan" />
          <img onClick={() => changeLang("ru")} src={Russia} alt="Russia" />
          <img onClick={() => changeLang("en")} src={Usa} alt="USA" />
          <img onClick={() => changeLang("kz")} src={Kazakhstan} alt="Kazakhstan" />
          <img onClick={() => changeLang("cn")} src={China} alt="China" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
