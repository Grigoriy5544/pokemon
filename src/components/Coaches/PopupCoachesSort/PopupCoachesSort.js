import React from "react";
import './PopupCoachesSort.css';

function PopupCoachesSort(props) {
    const popupClassName = props.isOpen ? 'popup-sort_opened' : 'popup-sort';
    const popupMobileClassName = props.isOpen ? 'popup-sort-mobile_opened' : 'popup-sort-mobile';

    function closeMobilePopup () {
        props.onclose();
    }
    console.log(popupClassName);
    console.log(popupMobileClassName);

    return (
        <div>
            <div className={popupClassName}>
                <h3 className="popup__title">Сортировка</h3>
                <form className="popup__form">
                    <label className="label">
                        Сначала новые
                        <input type="radio" name="radio" className="radio" />
                        <span className="custom-radio"></span>   
                    </label>
                    <label className="label">
                        По убыванию уровня
                        <input type="radio" name="radio" className="radio"/>
                        <span className="custom-radio"></span>
                    </label>   
                    <label  className="label">
                        По возрастанию уровня
                        <input type="radio" name="radio" className="radio" />
                        <span className="custom-radio"></span>
                    </label>
                    <label  className="label">
                        По алфавиту
                        <input type="radio" name="radio" className="radio"/>
                        <span className="custom-radio"></span>
                    </label> 
                </form>      
            </div>
            <div className={popupMobileClassName}>
                <div className="popup-sort-mobile__container">
                    <button type="button" className="popup-mobile__btn-close" onClick={closeMobilePopup}></button>
                    <h3 className="popup-mobile__title">Сортировка</h3>
                    <form className="popup-mobile__form">
                        <label className="label-mobile">
                            Сначала новые
                            <input type="radio" name="radio" className="radio-mobile" />
                            <span className="custom-radio-mobile"></span>   
                        </label>
                        <label className="label-mobile">
                            По убыванию уровня
                            <input type="radio" name="radio" className="radio-mobile"/>
                            <span className="custom-radio-mobile"></span>
                        </label>   
                        <label  className="label-mobile">
                            По возрастанию уровня
                            <input type="radio" name="radio" className="radio-mobile" />
                            <span className="custom-radio-mobile"></span>
                        </label>
                        <label  className="label-mobile">
                            По алфавиту
                            <input type="radio" name="radio" className="radio-mobile"/>
                            <span className="custom-radio-mobile"></span>
                        </label>
                        <button type="button" className="popup-mobile__btn">Применить</button> 
                    </form>
                </div>
                  
            </div>
        </div>
    )
}

export default PopupCoachesSort;