import React from "react";
import s from './Projection.module.css';
import { Component } from "react";
import imageDefault from '../../assets/images/default-image.png';
import leftArrow from '../../assets/images/left-arrow.png';
import rightArrow from '../../assets/images/right-arrow.png';
// import Preloader from "../../common/preloaders/Preloader";

class ToolsProjection extends Component {

    state = {
        dateMemory: this.props.dateMemory,
        typeMemory: this.props.typeMemory
    };

    onDateMemoryChange = (e) => {
        let dateMemoryText = e.currentTarget.value;
        this.setState({
            dateMemory: dateMemoryText
        });
    }

    onTypeMemoryChange = (e) => {
        let typeMemoryText = e.currentTarget.value;
        this.setState({
            typeMemory: typeMemoryText
        });
    }

    sendDateMemory = (e) => {
        if(e.target.validity.valid) {
            alert('ok');
        }
    }
    sendTypeMemory = (e) => {
        if(e.target.validity.valid) {
            alert('ok');
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({ status: this.props.status, isFetching: false });
    //     }
    // }

    render() {
        return (
            <div className={s.toolsProjection}>
                <div className={s.title}>Выбрать для проецирования</div>

                <div className={s.subTitle}>Дата воспоминания</div>
                <div className={s.toolsProjection__toolBar}>
                    <input placeholder={'04/09/21'} onBlur={this.sendDateMemory}  onChange={this.onDateMemoryChange} value={this.state.dateMemory} required pattern="^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$"></input>
                </div>
                <div className={s.subTitle}>Тематика воспоминания</div>
                <div className={s.toolsProjection__toolBar}>
                    <input placeholder={'Type here'} onBlur={this.sendTypeMemory} onChange={this.onTypeMemoryChange} value={this.state.typeMemory} required pattern="[А-Яа-я]+"></input>
                </div>
                <div>
                    <button>Найти</button>
                </div>
                <div className={s.toolsProjection__gallery}>
                    <div className={s.toolsProjection__arrow} onClick={() => { alert('alo') }}>
                        <img src={leftArrow} alt={'arr'} />
                    </div>
                    <div className={s.toolsProjection__image}>
                        <img src={this.props.startMemory == null ? imageDefault : this.props.startMemory} alt={'memory'} />
                    </div>
                    <div className={s.toolsProjection__arrow} onClick={() => { alert('alo') }}>
                        <img src={rightArrow} alt={'arr'} />
                    </div>
                </div>
                <div className={s.toolsProjection__button}>
                    <button>Выбрать</button>
                </div>
            </div>
        )
    }
}

export default ToolsProjection;