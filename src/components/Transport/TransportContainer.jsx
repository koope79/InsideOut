import React, { Fragment } from "react";
import { connect } from "react-redux";
import Transport from "./Transport";
import { arrow, resetGallery, selectMemoryData, setDataGallery, setDataMemoryTh, setSuccessInfo, transportMemory } from "../../redux/Memory-reducer";

const mapToStateToProps = (state) => {
    return {
        galleryMemoryImage: state.memory.galleryMemoryImage,
        memoriesData: state.memory.memoriesData,
        currentMemory: state.memory.currentMemory,
        errorMessage: state.memory.errorMessage,
        isSuccessInfo: state.memory.isSuccessInfo
    }
}

class TransportContainer extends React.Component {
    componentWillUnmount(){
        this.props.resetGallery();
    }
    render() {
        return (
            <Fragment>
                <Transport {...this.props} />
            </Fragment>
        );
    }
}

export default connect(mapToStateToProps, {arrow, setDataMemoryTh, resetGallery, 
    selectMemoryData, setDataGallery, transportMemory, setSuccessInfo})(TransportContainer);