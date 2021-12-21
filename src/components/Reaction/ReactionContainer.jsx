import React, { Fragment } from "react";
import { connect } from "react-redux";
import { arrow, selectMemoryData, setDataGallery, setDataMemoryTh } from "../../redux/Memory-reducer";
import Reaction from "./Reaction";

const mapToStateToProps = (state) => {
    return {
        galleryMemoryImage: state.memory.galleryMemoryImage,
        projectionMemoryImage: state.projectionPage.projectionMemoryImage,
        memoriesData: state.memory.memoriesData,
        currentMemory: state.memory.currentMemory,
        reactionData: state.reaction.reactionData
    }
}

class ReactionContainer extends React.Component {
    render(){
        return (
            <Fragment>
                <Reaction {...this.props}/>
            </Fragment>
        );
    }
}

export default connect(mapToStateToProps, { setDataMemoryTh, arrow, selectMemoryData, setDataGallery })(ReactionContainer);