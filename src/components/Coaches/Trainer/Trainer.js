import React from 'react';
import './Trainer.css';
import search from '../../../images/search.svg';
import PopupCoachesSort from '../PopupCoachesSort/PopupCoachesSort';
import PopupCoachesFilter from '../PopupCoachesFilter/PopupCoachesFilter';

function Trainer() {
    const [popupOpen, setPopupOpen] = React.useState(false);
    const [popupOpenFilter, setPopupOpenFilter] = React.useState(false);
    const [state, setState] = React.useState(false);
    const [stateInput, setStateInput] = React.useState(false);
    const [disabledButton, setDisabledButton] = React.useState(true);
    const [stateSticky, setStateSticky] = React.useState(false);
    const popupClassName = popupOpen ? 'pokemon__sort_active' : '';
    const counter = window.innerWidth > 700;
    const btnClassName = state ? 'form_type_duble-btn' : '';
    const formBtnClassName = state ? 'form_type_btn' : '';
    const pokemonClassName = !counter && stateSticky ? 'pokemon_hidden' : '';
    const formInputClassName = stateInput ? 'form_active' : '';
    console.log(popupClassName);
    React.useEffect(() => {
        setStateSticky(false);
    }, []);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        if(scrollTop > 0 && !counter) {
            setStateSticky(true);
        } else {
            setStateSticky(false);
        }
    });
    function handleclosePopup(e){
        const isBtnSort = e.target.closest('.pokemon__sort');
        const isPopup = e.target.closest('.popup-sort_opened');
        const isPopupMobile = e.target.closest('.popup-sort-mobile_opened');
        const isBtnFilter = e.target.closest('.pokemon__filter-btn');
        const isPopupFilter = e.target.closest('.popup-filter_opened');
        const isPopupMobileFilter = e.target.closest('.popup-filter-mobile_opened');
        if(!isPopup && !isBtnSort && !isPopupMobile && !isBtnFilter && !isPopupFilter && !isPopupMobileFilter) {
            closePopup();
        }
    }
    document.addEventListener('click', handleclosePopup);
    function closePopup() {
    setPopupOpen(false);
    setPopupOpenFilter(false);
    // setDisabledButton(true);
    }
    function formOppen() {
        setState(true);
        setDisabledButton(false);
    }
    function closeForm() {
        setState(false);
        setDisabledButton(true);
    }
    function HandleInput() {
        setStateInput(true);
    }
    return (
        <>
            {!stateSticky && <section className={`pokemon ${pokemonClassName}`} >
                <div className="pokemon__content pokemon__content_type_trainer">
                    <div className="pokemon__container pokemon__container_type_trainer">
                        <h1 className="pokemon__title pokemon__title_type_trainer">Тренеры</h1>
                        <PopupCoachesSort isOpen={popupOpen} onclose={closePopup} />
                        {popupOpen ? (
                            <div type="button" className={`pokemon__sort pokemon__sort_type_trainer  ${popupClassName}`} onClick={() => setPopupOpen(false)}>
                                <p className="pokemon__text">По убыванию уровня</p>
                                <div type="button" className="pokemon__img-close"></div>
                            </div>
                        ) : (
                            <div type="button" className={`pokemon__sort pokemon__sort_type_trainer ${popupClassName}`} onClick={() => setPopupOpen(true)}>
                                <p className="pokemon__text">По убыванию уровня</p>
                                <div type="button" className="pokemon__img"></div>
                            </div>
                        )}
                    </div>
                    <div className="pokemon__container-form pokemon__container-form_type_trainer">
                        {counter && <form className={`form form_type_trainer ${formInputClassName}`} name="search">
                            <img className="form__img" src={search} alt="лупа"/>
                            <input type="text" className='form__input form__input_type_trainer' placeholder='Поиск' onInput={HandleInput}/>
                        </form>}
                        {!counter && <form className={`form form_type_trainer ${btnClassName}`} name="search">
                            <img type="button" className="form__img form__img_type_btn" src={search} alt="лупа" onClick={formOppen}/>
                            <input hidden={!state} type="text" className='form__input-btn' placeholder='Поиск'/>
                        </form>}
                        <PopupCoachesFilter isOpenFilter={popupOpenFilter} onclose={closePopup}/>
                        {popupOpenFilter ? (
                            <div type="button" className="pokemon__filter-btn pokemon__filter-btn_active" onClick={() => setPopupOpenFilter(false)}>
                                <div hidden={false} className="pokemon__filter-counter">2</div>
                            </div>
                        ) : (
                            <div hidden={!disabledButton} type="button" className="pokemon__filter-btn" onClick={() => setPopupOpenFilter(true)}></div>
                        )}
                        <div hidden={disabledButton} type="button" className="pokemon__filter-close-form" onClick={closeForm}></div>
                    </div>
                </div>
                
            </section>}
            {!counter && stateSticky && <section className="pokemon_mobile_sticky">
                <div className="pokemon__content pokemon__content_mobile_sticky">
                        {popupOpen ? (
                            <div type="button" className={`pokemon__sort pokemon__sort_mobile_sticky ${popupClassName}`} onClick={() => setPopupOpen(false)}>
                                <p className="pokemon__text">По убыванию уровня</p>
                                <div type="button" className="pokemon__img-close"></div>
                            </div>
                        ) : (
                            <div type="button" className={`pokemon__sort pokemon__sort_mobile_sticky ${popupClassName}`} onClick={() => setPopupOpen(true)}>
                                <p className="pokemon__text">По убыванию уровня</p>
                                <div type="button" className="pokemon__img"></div>
                            </div>
                        )}
                        <PopupCoachesSort isOpen={popupOpen} onclose={closePopup} />
                    <div className="pokemon__container-form pokemon__container-form_mobile_sticky">
                        {counter && <form className={`form form_mobile_sticky ${formInputClassName}`} name="search">
                            <img className="form__img" src={search} alt="лупа"/>
                            <input type="text" className='form__input' placeholder='Поиск' onInput={HandleInput}/>
                        </form>}
                        {!counter && <form className={`form ${formBtnClassName} form_mobile_sticky `} name="search">
                            <img type="button" className="form__img form__img_type_btn" src={search} alt="лупа" onClick={formOppen}/>
                            <input hidden={!state} type="text" className='form__input-btn' placeholder='Поиск'/>
                        </form>}
                        <PopupCoachesFilter isOpenFilter={popupOpenFilter} onclose={closePopup}/>
                        {popupOpenFilter ? (
                            <div hidden={!disabledButton} type="button" className="pokemon__filter-btn pokemon__filter-btn_mobile_sticky pokemon__filter-btn_active" onClick={() => setPopupOpenFilter(false)}></div>
                        ) : (
                            <div hidden={!disabledButton} type="button" className="pokemon__filter-btn pokemon__filter-btn_mobile_sticky" onClick={() => setPopupOpenFilter(true)}></div>
                        )}
                        <div hidden={disabledButton} type="button" className="pokemon__filter-close-form pokemon__filter-close-form_mobile_sticky" onClick={closeForm}></div>
                    </div>
                </div> 
            </section>}
        </>
        
    )
}

export default Trainer;