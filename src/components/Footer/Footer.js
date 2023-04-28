import './Footer.css';
import logo from '../../images/logo-studio.svg';
import number from '../../images/studio-number.svg';
import file from '../../images/file-text.svg';
import rules from '../../images/rules.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__dok">
                <img className="footer__file" src={file} alt='файл'/>
                <p className="footer__text">Документация</p>
            </div>
            <div className="footer__logo">
                <img className="footer__studio" src={logo} alt='логотип'/>
                <img className="footer__number" src={number} alt=''/>
            </div>
            <div className="footer__rules">
                <img className="footer__rules-img" src={rules} alt='лист'/>
                <p className="footer__text">Правила игры</p>
            </div>
        </footer>
    )
}

export default Footer;