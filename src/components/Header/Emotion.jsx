import React from "react";
import s from './Header.module.css';

let Emotion = (props) => {
    console.log(props.title);
    return(
        <div title={props.title} className={s.animation_emotion}>
            <div className={s.emotion__eyes}>
                <div className={s.eye}></div>
                <div className={s.eye}></div>
            </div>
        </div>
    );
}
export default Emotion;