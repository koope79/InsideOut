import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addDreamsData, generationDream } from "../../redux/Dreams-reducer";
import { arrow, resetGallery, selectMemoryData, setDataGallery, setDataMemoryTh, transportMemory } from "../../redux/Memory-reducer";
import Dreams from "./Dreams";

const mapToStateToProps = (state) => {
    return {
        galleryMemoryImage: state.memory.galleryMemoryImage,
        memoriesData: state.memory.memoriesData,
        currentMemory: state.memory.currentMemory,
        dreamsData: state.dreams.dreamsData
    }
}

class DreamsContainer extends React.Component {
    componentWillUnmount(){
        this.props.resetGallery();
    }
    render(){
        return (
            <Fragment>
                <Dreams {...this.props}/>
            </Fragment>
        );
    }

}

export default connect(mapToStateToProps, {addDreamsData, arrow, setDataMemoryTh, 
    resetGallery, selectMemoryData, setDataGallery, transportMemory, generationDream})(DreamsContainer);