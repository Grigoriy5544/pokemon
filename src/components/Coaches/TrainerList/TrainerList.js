import './TrainerList.css';
import trainer1 from '../../../images/trainer-1.svg';
import trainer2 from '../../../images/trainer-2.svg';
import trainer3 from '../../../images/trainer-3.svg';
import trainer4 from '../../../images/trainer-4.svg';
import trainer5 from '../../../images/trainer-5.svg';
import trainer6 from '../../../images/trainer-6.svg';
import trainer7 from '../../../images/trainer-7.svg';
import cup from '../../../images/cup.svg';

function TrainerList() {
    return (
        <section className="trainers">
            <ul className="trainer-list ">
                <li className="trainer">
                    <img className="trainer__img" src={trainer1} alt="Эш" />
                    <div className="trainer__contant">
                        <h2 className="trainer__title">Эш
                            <img className="trainer__title-cup" src={cup} alt="кубок"/>
                        </h2>        
                        <div className="trainer__container">
                            <div className="trainer__level trainer__level_type_5"><p>Уровень 5</p></div>
                            <div className="trainer__bol "></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                        </div>
                        <div className="trainer__container2">
                            <div className="trainer__number">1005</div>
                            <div className="trainer__copy"></div>
                        </div>
                    </div>
                </li>
                <li className="trainer">
                    <img className="trainer__img" src={trainer2} alt="Каллахад" />
                    <div className="trainer__contant">
                        <h2 className="trainer__title">Каллахад</h2>        
                        <div className="trainer__container">
                            <div className="trainer__level trainer__level_type_2"><p>Уровень 2</p></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                        </div>
                        <div className="trainer__container2">
                            <div className="trainer__number">1005</div>
                            <div className="trainer__copy"></div>
                        </div>
                    </div>
                </li>
                <li className="trainer">
                    <img className="trainer__img" src={trainer3} alt="Доун" />
                    <div className="trainer__contant">
                        <h2 className="trainer__title">Доун</h2>        
                        <div className="trainer__container">
                            <div className="trainer__level trainer__level_type_2"><p>Уровень 2</p></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                        </div>
                        <div className="trainer__container2">
                            <div className="trainer__number">1005</div>
                            <div className="trainer__copy"></div>
                        </div>
                    </div>
                </li>
                <li className="trainer">
                    <img className="trainer__img" src={trainer4} alt="Рин" />
                    <div className="trainer__contant">
                        <h2 className="trainer__title">Рин</h2>        
                        <div className="trainer__container">
                            <div className="trainer__level trainer__level_type_2"><p>Уровень 2</p></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                        </div>
                        <div className="trainer__container2">
                            <div className="trainer__number">1005</div>
                            <div className="trainer__copy"></div>
                        </div>
                    </div>
                </li>
                <li className="trainer">
                    <img className="trainer__img" src={trainer6} alt="Клемонт" />
                    <div className="trainer__contant">
                        <h2 className="trainer__title">Клемонт</h2>        
                        <div className="trainer__container">
                            <div className="trainer__level trainer__level_type_1"><p>Уровень 1</p></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                        </div>
                        <div className="trainer__container2">
                            <div className="trainer__number">1005</div>
                            <div className="trainer__copy"></div>
                        </div>
                    </div>
                </li>
                <li className="trainer">
                    <img className="trainer__img" src={trainer7} alt="Каллахад" />
                    <div className="trainer__contant">
                        <h2 className="trainer__title">Каллахад</h2>        
                        <div className="trainer__container">
                            <div className="trainer__level trainer__level_type_2"><p>Уровень 2</p></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                        </div>
                        <div className="trainer__container2">
                            <div className="trainer__number">1005</div>
                            <div className="trainer__copy"></div>
                        </div>
                    </div>
                </li>
                <li className="trainer">
                    <img className="trainer__img" src={trainer3} alt="Доун" />
                    <div className="trainer__contant">
                        <h2 className="trainer__title">Доун</h2>        
                        <div className="trainer__container">
                            <div className="trainer__level trainer__level_type_1"><p>Уровень 1</p></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                        </div>
                        <div className="trainer__container2">
                            <div className="trainer__number">1005</div>
                            <div className="trainer__copy"></div>
                        </div>
                    </div>
                </li>
                <li className="trainer">
                    <img className="trainer__img" src={trainer1} alt="Эш" />
                    <div className="trainer__contant">
                        <h2 className="trainer__title">Эш
                            {/* <img className="trainer__title-cup" src={cup} alt="кубок"/> */}
                        </h2>        
                        <div className="trainer__container">
                            <div className="trainer__level trainer__level_type_5"><p>Уровень 5</p></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                        </div>
                        <div className="trainer__container2">
                            <div className="trainer__number">1005</div>
                            <div className="trainer__copy"></div>
                        </div>
                    </div>
                </li>
                <li className="trainer">
                    <img className="trainer__img" src={trainer2} alt="Каллахад" />
                    <div className="trainer__contant">
                        <h2 className="trainer__title">Каллахад</h2>        
                        <div className="trainer__container">
                            <div className="trainer__level trainer__level_type_2"><p>Уровень 2</p></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                        </div>
                        <div className="trainer__container2">
                            <div className="trainer__number">1005</div>
                            <div className="trainer__copy"></div>
                        </div>
                    </div>
                </li>
                <li className="trainer">
                    <img className="trainer__img" src={trainer4} alt="Рин" />
                    <div className="trainer__contant">
                        <h2 className="trainer__title">Рин</h2>        
                        <div className="trainer__container">
                            <div className="trainer__level trainer__level_type_2"><p>Уровень 2</p></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                        </div>
                        <div className="trainer__container2">
                            <div className="trainer__number">1005</div>
                            <div className="trainer__copy"></div>
                        </div>
                    </div>
                </li>
                <li className="trainer">
                    <img className="trainer__img" src={trainer5} alt="Лара" />
                    <div className="trainer__contant">
                        <h2 className="trainer__title">Лара</h2>        
                        <div className="trainer__container">
                            <div className="trainer__level trainer__level_type_1"><p>Уровень 1</p></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                        </div>
                        <div className="trainer__container2">
                            <div className="trainer__number">1005</div>
                            <div className="trainer__copy"></div>
                        </div>
                    </div>
                </li>
                <li className="trainer">
                    <img className="trainer__img" src={trainer6} alt="Клемонт" />
                    <div className="trainer__contant">
                        <h2 className="trainer__title">Клемонт</h2>        
                        <div className="trainer__container">
                            <div className="trainer__level trainer__level_type_1"><p>Уровень 1</p></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                            <div className="trainer__bol trainer__bol_opacity"></div>
                        </div>
                        <div className="trainer__container2">
                            <div className="trainer__number">1005</div>
                            <div className="trainer__copy"></div>
                        </div>
                    </div>
                </li>    
            </ul>
        </section>
    )
}

export default TrainerList;