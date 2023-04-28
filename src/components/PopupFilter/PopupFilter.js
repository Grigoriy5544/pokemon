import React from "react";
import './PopupFilter.css';

function PopupFilter(props) {
    const [state, setState] = React.useState(true);
    const popupClassName = props.isOpenFilter ? 'popup-filter_opened' : 'popup-filter';
    const popupMobileClassName = props.isOpenFilter ? 'popup-filter-mobile_opened' : 'popup-filter-mobile';

    function closeMobilePopup () {
        props.onclose();
    }
    function handleAttack(e) {
        const currentBtn = e.target;
        const isCurrentBtn = currentBtn.classList.contains('popup__btn');
        if(isCurrentBtn) {
            currentBtn.classList.add('popup__btn_active');
            setState(false);
        }
        console.log(currentBtn);
    }
    function handleCloseAttack(e) {
        let btn = e.target.closest('button');
        if (btn) {
            btn.classList.remove('popup__btn_active');
            setState(true);
        }
        
    }
    return (
        <div>
            <div className={popupClassName}>
                <div className="popup__filter-container">
                    <h3 className="popup__title">Фильтры</h3>
                    <button type="button" className="popup__reset-btn">Сбросить
                        <div type="button" className="popup__btn-reset-close"></div>
                    </button>
                </div>
                <div className="popup__filter">
                    <p className="popup__subtitle">Атака</p>
                    <div className="popup__btns">
                        <button type="button" className="popup__btn" onClick={handleAttack}><p className="popup__btn-text">1</p>
                            <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseAttack}></div>
                        </button>
                        <button type="button" className="popup__btn" onClick={handleAttack}><p>2</p>
                            <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseAttack}></div>
                        </button>
                        <button type="button" className="popup__btn" onClick={handleAttack}>3
                            <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseAttack}></div>
                        </button>
                        <button type="button" className="popup__btn" onClick={handleAttack}>4
                            <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseAttack}></div>
                        </button>
                        <button type="button" className="popup__btn" onClick={handleAttack}>5<div hidden={!state} className="popup__btn-plus">+</div>
                            <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseAttack}></div>
                        </button>
                    </div>
                    <label className="popup__label">Показывать проигравших
                        <input type="checkbox" className="popup__switch" name="switch" />
                        <span className="popup__fake"></span>
                    </label>
                    <label  className="popup__label">Только в покеболе
                        <input type="checkbox" className="popup__switch" name="switch" />
                        <span className="popup__fake"></span>
                    </label>
                </div>
            </div>
            <div className={popupMobileClassName}>
                <div className="popup-filter-mobile__container">
                    <button type="button" className="popup-mobile__btn-close" onClick={closeMobilePopup}></button>
                    <h3 className="popup__title">Фильтры</h3>
                    <div className="popup__filter">
                        <p className="popup__subtitle">Атака</p>
                        <div className="popup__btns">
                            <button type="button" className="popup__btn" onClick={handleAttack}>1
                                <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseAttack}></div>
                            </button>
                            <button type="button" className="popup__btn" onClick={handleAttack}>2
                                <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseAttack}></div>
                            </button>
                            <button type="button" className="popup__btn" onClick={handleAttack}>3
                                <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseAttack}></div>
                            </button>
                            <button type="button" className="popup__btn" onClick={handleAttack}>4
                                <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseAttack}></div>
                            </button>
                            <button type="button" className="popup__btn" onClick={handleAttack}>5<div hidden={!state} className="popup__btn-plus">+</div>
                                <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseAttack}></div>
                            </button>
                        </div>
                        <label className="popup__label">Показывать проигравших
                            <input type="checkbox" className="popup__switch" name="switch" />
                            <span className="popup__fake"></span>
                        </label>
                        <label  className="popup__label">Только в покеболе
                            <input type="checkbox" className="popup__switch" name="switch" />
                            <span className="popup__fake"></span>
                        </label>
                        <button type="button" className="popup-mobile__btn">Применить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupFilter;
