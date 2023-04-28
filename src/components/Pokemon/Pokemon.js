import React from 'react';   
import './Pokemon.css';
import search from '../../images/search.svg';
import PopupSort from '../PopupSort/PopupSort';
import PopupFilter from '../PopupFilter/PopupFilter';

function Pokemon() {
    const [popupOpen, setPopupOpen] = React.useState(false);
    const [popupOpenFilter, setPopupOpenFilter] = React.useState(false);
    const [state, setState] = React.useState(false);
    const [stateInput, setStateInput] = React.useState(false);
    const [disabledButton, setDisabledButton] = React.useState(true);
    const [stateSticky, setStateSticky] = React.useState(false);
    const popupClassName = popupOpen ? 'pokemon__sort_active' : '';
    const counter = window.innerWidth > 700;
    const formBtnClassName = state ? 'form_type_btn' : '';
    const pokemonClassName = !counter && stateSticky ? 'pokemon_hidden' : '';
    const formInputClassName = stateInput ? 'form_active' : '';
    
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
    function formOpen() {
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
    console.log(stateSticky, '--stateSticky');
    return (
        <>
            {!stateSticky && <section className={`pokemon ${pokemonClassName}`} >
                <div className="pokemon__content">
                    <div className="pokemon__container">
                        <h1 className="pokemon__title">Покемоны</h1>
                        <PopupSort isOpen={popupOpen} onclose={closePopup} />
                        {popupOpen ? (
                            <div type="button" className={`pokemon__sort ${popupClassName}`} onClick={() => setPopupOpen(false)}>
                                <p className="pokemon__text">Сначала новые</p>
                                <div type="button" className="pokemon__img-close"></div>
                            </div>
                        ) : (
                            <div type="button" className={`pokemon__sort ${popupClassName}`} onClick={() => setPopupOpen(true)}>
                                <p className="pokemon__text">Сначала новые</p>
                                <div type="button" className="pokemon__img"></div>
                            </div>
                        )}
                    </div>
                    <div className="pokemon__container-form">
                        {counter && <form className={`form ${formInputClassName}`} name="search" >
                            <img className="form__img" src={search} alt="лупа"/>
                            <input hidden={state} type="text" className='form__input' placeholder='Поиск' onInput={HandleInput}/>
                        </form>}
                        {!counter && <form className={`form ${formBtnClassName}`} name="search">
                            <img type="button" className="form__img form__img_type_btn" src={search} alt="лупа" onClick={formOpen}/>
                            <input hidden={!state} type="text" className='form__input-btn' placeholder='Поиск'/>
                        </form>}
                        <PopupFilter isOpenFilter={popupOpenFilter} onclose={closePopup}/>
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
                                <p className="pokemon__text">Сначала новые</p>
                                <div type="button" className="pokemon__img-close"></div>
                            </div>
                        ) : (
                            <div type="button" className={`pokemon__sort pokemon__sort_mobile_sticky ${popupClassName}`} onClick={() => setPopupOpen(true)}>
                                <p className="pokemon__text">Сначала новые</p>
                                <div type="button" className="pokemon__img"></div>
                            </div>
                        )}
                    <PopupSort isOpen={popupOpen} onclose={closePopup} />
                    <div className="pokemon__container-form pokemon__container-form_mobile_sticky">
                        {counter && <form className={`form form_mobile_sticky ${formInputClassName}`} name="search">
                            <img className="form__img" src={search} alt="лупа"/>
                            <input type="text" className='form__input' placeholder='Поиск' onInput={HandleInput}/>
                        </form>}
                        {!counter && <form className={`form ${formBtnClassName} form_mobile_sticky `} name="search">
                            <img type="button" className="form__img form__img_type_btn" src={search} alt="лупа" onClick={formOpen}/>
                            <input hidden={!state} type="text" className='form__input-btn' placeholder='Поиск'/>
                        </form>}
                        <PopupFilter isOpenFilter={popupOpenFilter} onclose={closePopup}/>
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

export default Pokemon;