import React from "react";
import './PopupCoachesFilter.css';

function PopupCoachesFilter(props) {
    const [state, setState] = React.useState(true);
    const popupClassName = props.isOpenFilter ? 'popup-filter_opened' : 'popup-filter';
    const popupMobileClassName = props.isOpenFilter ? 'popup-filter-mobile_opened' : 'popup-filter-mobile';

    function closeMobilePopup () {
        props.onclose();
    }
    function handleLevel(e) {
        const currentBtn = e.target;
        const isCurrentBtn = currentBtn.classList.contains('popup__btn');
        if(isCurrentBtn) {
            currentBtn.classList.add('popup__btn_active');
            setState(false);
        }
    }
    function handleCloseLevel(e) {
        let btn = e.target.closest('button');
        if (btn) {
            btn.classList.remove('popup__btn_active');
            setState(true);
        }
        
    }
    return (
        <div>
            <div className={`${popupClassName} popup-filter_type_trainer`}>
                <h3 className="popup__title">Фильтры</h3>
                <div className="popup__filter">
                    <p className="popup__subtitle popup__subtitle_type_trainer">Уровень</p>
                    <div className="popup__btns">
                        <button type="button" className="popup__btn" onClick={handleLevel}>1
                            <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseLevel}></div>
                        </button>
                        <button type="button" className="popup__btn" onClick={handleLevel}>2
                            <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseLevel}></div>
                        </button>
                        <button type="button" className="popup__btn" onClick={handleLevel}>3
                            <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseLevel}></div>
                        </button>
                        <button type="button" className="popup__btn" onClick={handleLevel}>4
                            <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseLevel}></div>
                        </button>
                        <button type="button" className="popup__btn" onClick={handleLevel}>5
                            <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseLevel}></div>
                        </button>
                    </div>
                </div>
            </div>
            <div className={popupMobileClassName}>
                <div className="popup-filter-mobile__container">
                    <button type="button" className="popup-mobile__btn-close" onClick={closeMobilePopup}></button>
                    <h3 className="popup__title">Фильтры</h3>
                    <div className="popup__filter">
                        <p className="popup__subtitle">Атака</p>
                        <div className="popup__btns">
                            <button type="button" className="popup__btn" onClick={handleLevel}>1
                                <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseLevel}></div>
                            </button>
                            <button type="button" className="popup__btn" onClick={handleLevel}>2
                                <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseLevel}></div>
                            </button>
                            <button type="button" className="popup__btn" onClick={handleLevel}>3
                                <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseLevel}></div>
                            </button>
                            <button type="button" className="popup__btn" onClick={handleLevel}>4
                                <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseLevel}></div>
                            </button>
                            <button type="button" className="popup__btn" onClick={handleLevel}>5
                                <div hidden={state} type="button" className="popup__btn-close" onClick={handleCloseLevel}></div>
                            </button>
                        </div>
                        <button type="button" className="popup-mobile__btn">Применить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupCoachesFilter;
