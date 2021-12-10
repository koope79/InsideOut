import React from "react";
import s from './Gallery.module.css';
import imageDefault from '../../assets/images/default-image.png';
import leftArrow from '../../assets/images/left-arrow.png';
import rightArrow from '../../assets/images/right-arrow.png';
import classnames from 'classnames';

const Gallery = ({ galleryMemoryImage, arrow, size }) => {
    return (
        <div className={s.gallery}>
            <div className={s.gallery__arrow} onClick={galleryMemoryImage ? () => { arrow(0) } : null}>
                <img src={leftArrow} alt={'arr'} />
            </div>
            <div className={ classnames( {[s.gallery__image__small]: size == "small"}, {[s.gallery__image__middle]: size == "middle"}, s.gallery__image ) }>
                <img src={galleryMemoryImage == null ? imageDefault : galleryMemoryImage} alt={'memory'} />
            </div>
            <div className={s.gallery__arrow} onClick={galleryMemoryImage ? () => { arrow(1) } : null}>
                <img src={rightArrow} alt={'arr'} />
            </div>
        </div>
    );
}

export default Gallery;