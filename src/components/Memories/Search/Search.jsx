import React from "react";
import ToolForm from "../../ProjectionMemory/ToolForm";
import s from '../../ProjectionMemory/Projection.module.css';
import st from '../Memories.module.css';
import imageDefault from '../../../assets/images/default-image.png';
import leftArrow from '../../../assets/images/left-arrow.png';
import rightArrow from '../../../assets/images/right-arrow.png';

const Search = ({setSrcData, galleryMemoryImage, arrow }) => {
    return (
        <div className={st.search}>
            <div className={st.toolsProjection}>
                <div className={s.title}>Найти</div>
                <div className={st.searchForm}>
                    <ToolForm setSrcData={setSrcData} />
                </div>
                

                <div className={s.toolsProjection__gallery}>
                    <div className={s.toolsProjection__arrow} onClick={() => { arrow(0) }}>
                        <img src={leftArrow} alt={'arr'} />
                    </div>
                    <div className={st.search__image}>
                        <img src={galleryMemoryImage == null ? imageDefault : galleryMemoryImage} alt={'memory'} />
                    </div>
                    <div className={s.toolsProjection__arrow} onClick={() => { arrow(1) }}>
                        <img src={rightArrow} alt={'arr'} />
                    </div>
                </div>
                <div className={st.search__button}>
                    <button onClick={() => { alert('info') }}>Информация</button>
                </div>

            </div>
        </div>
    );
}

export default Search;