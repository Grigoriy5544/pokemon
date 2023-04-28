import React, {useEffect, useRef, useState} from 'react';
import {useLocation, NavLink} from "react-router-dom";

import styles from "./PockemonProfile.module.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import ball from "../../images/ball.png"
import copy from "../../images/copy.svg"
import LvlPoint from "./lvlPoint/LvlPoint";

import leftBtn from "../../images/chevron-left.png"
import rightBtn from "../../images/chevron-right.png"
import historyIcon from "../../images/history.png"
import closeBtn from "../../images/close-popup.svg"

import shield from "../../images/shield.png"
import sword from "../../images/sword.png"


const PockemonProfile = () => {
  const location = useLocation();
  const {state} = location;

  const [battlesOpen, setBattlesOpen] = useState(false)
  const battlesHistory = useRef(null)
  const pokemonInfo = useRef(null)
  const coachInfo = useRef(null)
  const img = useRef(null)
  const text = useRef(null)
  const wrapper = useRef(null)
  const battles = state.battles


  useEffect(() => {
    battlesOpen ? pokemonInfo.current.style.display = 'none' : pokemonInfo.current.style.display = 'flex'
    battlesOpen ? coachInfo.current.style.display = 'none' : coachInfo.current.style.display = 'flex'
    battlesOpen ? text.current.style.display = 'none' : text.current.style.display = 'flex'
    battlesOpen ? wrapper.current.style.display = 'none' : wrapper.current.style.display = 'flex'
    battlesOpen ? battlesHistory.current.style.marginTop = '30px' : battlesHistory.current.style.marginTop = 0
    battlesOpen && window.innerWidth < 960 ? img.current.style.display = "none" :  img.current.style.display = "block"
  }, [battlesOpen])

  return (
    <>
      <Header/>
      <main className={styles.profile}>
        <div className={styles.container}>
          <div className={styles.btn}>
            <NavLink to="/"><img src={leftBtn} alt=""/>{window.innerWidth > 1260 ? "Назад" : ""}</NavLink>
          </div>
          <img ref={img} src={state.img} alt={state.img} className={styles.img}/>
          <div className={styles.info}>
            <div className={styles.info__name}>
              <p ref={text}>Покемон</p>
              <div ref={wrapper} className={styles.wrapper}>
                <h4 className={styles.pokemonName}>{state.name}</h4>
                <img src={ball} alt="ball"/>
              </div>
              <div className={styles.info__wrapper}>
                <div ref={pokemonInfo} className={styles.pokemon__info}>
                  <div>
                    <span className={styles.grey}>ID покемона</span>{state.id}
                    <img src={copy} alt=""/>
                  </div>
                  <div><span className={styles.grey}>Стадия</span>{state.stage}
                    <div className={styles.lvlStrip}>
                      <LvlPoint active={state.stage > 0}/>
                      <LvlPoint active={(state.stage - 1) > 0}/>
                      <LvlPoint active={(state.stage - 2) > 0}/>
                    </div>
                  </div>
                  <div>
                    <span className={styles.grey}>Атака</span>{state.attack}
                    <div className={styles.lvlStrip}>
                      <LvlPoint active={state.attack > 0}/>
                      <LvlPoint active={(state.attack - 1) > 0}/>
                      <LvlPoint active={(state.attack - 2) > 0}/>
                      <LvlPoint active={(state.attack - 3) > 0}/>
                      <LvlPoint active={(state.attack - 4) > 0}/>
                      <LvlPoint active={(state.attack - 5) > 0}/>
                      <LvlPoint active={(state.attack - 6) > 0}/>
                    </div>
                  </div>
                </div>
                <div ref={coachInfo} className={styles.coach__info}>
                  <div>
                    <img src={state.coachImg} alt="" className={styles.coach__avatar}/>
                    <div className={styles.coach__wrapper}>
                      <p><span className={styles.grey}>Тренер </span>{state.coachName}</p>
                      <div>
                        <div
                          className={`${styles.coach__lvl} ${state.coachLvl <= 4 ? styles.blue : styles.red}`}>Уровень {state.coachLvl}</div>
                        <span>{state.coachId} <img src={copy} alt=""/></span>
                      </div>
                    </div>
                  </div>
                  <img src={rightBtn} className={styles.backBtn} alt="rightBtn"/>
                </div>
                <div ref={battlesHistory} className={styles.battles__history}
                     onClick={() => setBattlesOpen(!battlesOpen)}>
                  <div>
                    <img src={historyIcon} alt=""/>
                    История боев
                    <span className={styles.grey}>{Object.keys(state.battles).length}</span>
                  </div>
                  <img src={battlesOpen ? closeBtn : rightBtn} alt=""/>
                </div>
                <div className={styles.battles}>
                  {battlesOpen && Object.keys(battles).map((key, i) => {
                    const battle = battles[key]
                    return <div key={i} className={styles.battle}>
                      <div className={styles.date}>{battle.date}</div>
                      <div className={styles.battle__wrapper}>
                        <div className={styles.battle__we}>
                          <div>
                            <img src={battle.we.img} alt="" className={styles.battle__img}/>
                            <div>
                              <p className={styles.battle__weName}>{battle.we.name}</p>
                              <div className={styles.battle__weAttack}>Атака {battle.we.attack}</div>
                            </div>
                          </div>
                          <span style={{marginLeft: "16px"}} className={styles.grey}>{battle.we.id}</span>
                        </div>
                        <div className={styles.battle__icons}>
                          <img src={shield} alt=""/>
                          <img src={sword} alt=""/>
                        </div>
                        <div className={styles.battle__opponent}>
                          <div>
                            <img src={battle.opponent.img} alt="" className={styles.battle__img}/>
                            <div>
                              <p className={styles.battle__opponentName}>{battle.opponent.name}</p>
                              <div className={styles.battle__opponentAttack}>Атака {battle.opponent.attack}</div>
                            </div>
                          </div>
                          <span style={{marginLeft: "16px"}} className={styles.grey}>{battle.opponent.id}</span>
                        </div>
                        <div className={`${styles.battle__result} ${battle.win ? styles.win : styles.lose}`}>
                          {battle.win ? "Победа" : "Поражение"} {battle.we.name}!
                        </div>
                      </div>
                    </div>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
    ;
};

export default PockemonProfile;