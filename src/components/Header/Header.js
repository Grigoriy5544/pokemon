import { Link } from "react-router-dom";
import './Header.css';
import img from '../../images/header-img.svg';
import pokemon from '../../images/header-pokemon.svg';
import coaches from '../../images/header-coaches.svg';
import shops from '../../images/header-shops.svg';
import id from '../../images/header-id.svg';
import mobilePokemon from '../../images/mobile-pokemon.svg';
import mobileCoaches from '../../images/mobile-coaches.svg';
import mobileShops from '../../images/mobile-shops.svg';

function Header() {
    return (
        <header>
            <div className="header">
                <div className="header__container-btn">
                    <img className="header__img" src={img} alt="логотип"/>
                    <div className="header__btns">
                        <Link to="/" className="header__btn header__btn_active">
                            <img className="header__btn-img" src={pokemon} alt="логотип"/>
                            Покемоны
                        </Link>
                        <Link to="/coaches" className="header__btn">
                            <img className="header__btn-img" src={coaches} alt="логотип"/>
                            Тренеры
                        </Link>
                        <button type='button' className="header__btn">
                            <img className="header__btn-img" src={shops} alt="логотип"/>
                            Магазин
                        </button>
                    </div>
                </div>
                <div className="header__container">
                    <div className="header__id">
                        <div className="header__id-texts">
                            <p className="header__id-text">ID</p>
                            <p className="header__id-text header__id-text_type_profile">1125</p>
                        </div>
                        <img className="header__id-img" src={id} alt="логотип"/>
                    </div>
                    <div type='button' className="header__btn-link"></div>
                </div>
            </div>
            <div className="header-mobile">
                <div className="header-mobile__items">
                    <Link to="/" className="header-mobile__item">
                        <img className="header-mobile__img" src={mobilePokemon} alt="покебол"/>
                        <p className="header-mobile__title">Покемоны</p>
                    </Link>
                    <Link to="/coaches" className="header-mobile__item">
                        <img className="header-mobile__img" src={mobileCoaches} alt="тренеры"/>
                        <p className="header-mobile__title">Тренеры</p>
                    </Link>
                    <div className="header-mobile__item">
                        <img className="header-mobile__img" src={mobileShops} alt="магазины"/>
                        <p className="header-mobile__title">Магазин</p>
                    </div>
                    <div className="header-mobile__item">
                        <img className="header-mobile__img" src={id} alt="профиль"/>
                        <p className="header-mobile__title">Профиль</p>
                    </div>
                </div>
                <div className="header-mobile__frame">
                    <div className="header-mobile__handle"></div>
                </div>
            </div>
        </header>
  
    )
}

export default Header;