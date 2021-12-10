import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getFearsData, resetFearData, saveFear, selectFearData } from "../../redux/Fears-reducer";
import { arrow, resetGallery, setDataGallery } from "../../redux/Memory-reducer";
import Fears from "./Fears";

const mapToStateToProps = (state) => {
    return {
        galleryMemoryImage: state.memory.galleryMemoryImage,
        fearsData: state.fears.fearsData,
        currentFear: state.fears.currentFear,
        errorMessage: state.fears.errorMessage
    }
}

class FearsContainer extends React.Component {
    componentWillUnmount(){
        this.props.resetGallery();
        this.props.resetFearData();
    }
    render(){
        return (
            <Fragment>
                <Fears {...this.props} />
            </Fragment>
        );
    }
}

export default connect(mapToStateToProps, {arrow, getFearsData, selectFearData, resetFearData, resetGallery, setDataGallery, saveFear})(FearsContainer);