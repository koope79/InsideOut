import React, { Fragment } from "react";
import { connect } from "react-redux";
import { countFearsTh, getFearsData, resetFearData, saveFear, selectFearData, walkingFear } from "../../redux/Fears-reducer";
import { arrow, resetGallery, setDataGallery } from "../../redux/Memory-reducer";
import Fears from "./Fears";

const mapToStateToProps = (state) => {
    return {
        galleryMemoryImage: state.memory.galleryMemoryImage,
        fearsData: state.fears.fearsData,
        currentFear: state.fears.currentFear,
        errorMessage: state.fears.errorMessage,
        countFears: state.fears.countFears,
        countReleaseFears: state.fears.countReleaseFears
    }
}

class FearsContainer extends React.Component {
    componentDidMount(){
        this.props.countFearsTh();
    }
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

export default connect(mapToStateToProps, {arrow, getFearsData, selectFearData, resetFearData, 
    resetGallery, setDataGallery, saveFear, countFearsTh, walkingFear})(FearsContainer);