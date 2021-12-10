import React, { Fragment } from "react";
import { connect } from "react-redux";
import Transport from "./Transport";
import { arrow, resetGallery, selectMemoryData, setDataGallery, setDataMemoryTh, transportMemory } from "../../redux/Memory-reducer";
//import s from './Transport.module.css';

const mapToStateToProps = (state) => {
    return {
        galleryMemoryImage: state.memory.galleryMemoryImage,
        memoriesData: state.memory.memoriesData,
        currentMemory: state.memory.currentMemory
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

export default connect(mapToStateToProps, {arrow, setDataMemoryTh, resetGallery, selectMemoryData, setDataGallery, transportMemory})(TransportContainer);