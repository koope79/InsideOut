import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { arrow, resetGallery, setDataMemoryTh } from "../../redux/Memory-reducer";
import { setProjectionMemory } from "../../redux/Projection-reducer";
import Projection from "./Projection";


const mapToStateToProps = (state) =>{
    return {
        galleryMemoryImage: state.memory.galleryMemoryImage,
        projectionMemoryImage: state.projectionPage.projectionMemoryImage
    }
}

class ProjectionContainer extends React.Component {
    componentWillUnmount(){
        this.props.resetGallery();
    }
    render() {
        return (
            <Fragment>
                <Projection {...this.props} />
            </Fragment>

        )
    }
}

export default connect( mapToStateToProps, {arrow, setDataMemoryTh, resetGallery, setProjectionMemory} )(ProjectionContainer);