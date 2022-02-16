import classNames from "classnames";
import React from "react";
import s from '../Header/Header.module.css';

export const CaseEmotion = ({emotion}) => {
    if (emotion === "sadness") return (<Emotion title={"печаль"} color={s.sadness_emotion}/>)
    if (emotion === "happiness") return (<Emotion title={"радость"} color={s.happy_emotion}/>)
    if (emotion === "rage") return (<Emotion title={"гнев"} color={s.rage_emotion}/>)
    if (emotion === "fear") return (<Emotion title={"страх"} color={s.fear_emotion}/>)
    if (emotion === "disgust") return (<Emotion title={"брезгливость"} color={s.disgust_emotion}/>)
}

const Emotion = ({title, color}) => {
    return(
        <div title={title} className={classNames(s.animation_emotion, color) }>
            <div className={s.emotion__eyes}>
                <div className={s.eye}></div>
                <div className={s.eye}></div>
            </div>
        </div>
    );
}